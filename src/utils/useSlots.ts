import {
  appendOwnerState,
  mergeSlotProps,
  resolveComponentProps,
  useForkRef,
} from "./utils";

export type EventHandlers = Record<string, React.EventHandler<any>>;

export type WithCommonProps<T> = T & {
  className?: string;
  styles?: React.CSSProperties;
  ref?: React.Ref<any>;
};

export type ExtractComponentProps<P> = P extends
  | infer T
  | ((ownerState: any) => infer T)
  ? T
  : never;

export const useSlots = <
  T extends string,
  ElementType extends React.ElementType,
  SlotProps,
  OwnerState extends {},
  ExternalSlotProps extends {
    component?: React.ElementType;
    ref?: React.Ref<any>;
  },
  ExternalForwardedProps extends {
    component?: React.ElementType;
    slots?: {
      [K in T]?: React.ElementType;
    };
    slotProps?: {
      [K in T]?:
        | ExternalSlotProps
        | ((ownerState: OwnerState) => ExternalSlotProps);
    };
  },
  AdditionalProps,
  SlotOwnerState extends {}
>(
  name: T,
  params: (T extends "root"
    ? { ref: React.ForwardedRef<any> }
    : {
        ref?: React.ForwardedRef<any>;
      }) & {
    className?: string;
    elementType?: ElementType;
    ownerState: OwnerState;
    extenalForwardedProps: ExternalForwardedProps;
    getSlotProps?: () => (other: EventHandlers) => WithCommonProps<SlotProps>;
    additionalProps?: WithCommonProps<AdditionalProps>;
    getSlotOwnerState?: (
      mergedProps: AdditionalProps &
        SlotProps &
        ExternalSlotProps &
        ExtractComponentProps<
          Exclude<
            Exclude<ExternalForwardedProps["slotProps"], undefined>[T],
            undefined
          >
        >
    ) => SlotOwnerState;
    internalForwardedProps?: any;
  }
) => {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    extenalForwardedProps,
    getSlotOwnerState,
    getSlotProps,
    additionalProps,
    internalForwardedProps,
    ...useSlotPropsParams
  } = params;

  const {
    component: rootComponent,
    slots = {
      [name]: undefined,
    },
    slotProps = {
      [name]: undefined,
    },
    ...other
  } = extenalForwardedProps;

  const elementType =
    (slots[name] ?? initialElementType) || ("div" as React.ElementType);

  const resolvedComponentsProps = resolveComponentProps(
    slotProps[name],
    ownerState
  ) as ExternalSlotProps;

  const {
    props: { component: slotComponent, ...mergedProps },
    internalRef,
  } = mergeSlotProps({
    getSlotProps,
    additionalProps,
    ExternalSlotProps: resolvedComponentsProps,
    ownerState,
    className,
  });

  const ref = useForkRef(
    internalRef,
    resolvedComponentsProps?.ref,
    params?.ref
  );

  const slotOwnerState = getSlotOwnerState
    ? getSlotOwnerState(mergedProps)
    : {};
  const finalOwnerState = {
    ...ownerState,
    ...slotOwnerState,
  };

  const LeafComponent =
    name === "root" ? slotComponent || rootComponent : slotComponent;

  const props = appendOwnerState(
    elementType,
    {
      ...(name === "root" &&
        rootComponent &&
        !slots[name] &&
        internalForwardedProps),
      ...mergedProps(
        name !== "root" && !slots[name] && !internalForwardedProps
      ),
      ...mergedProps,
      ...(LeafComponent && {
        as: LeafComponent,
      }),
      ref,
    },
    finalOwnerState
  );

  Object.keys(slotOwnerState).forEach((propName) => {
    delete props[propName];
  });

  return [elementType, props];
};
