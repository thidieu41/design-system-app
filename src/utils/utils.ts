import clsx from "clsx";
import { MergeSlotPropsType } from "../types/slots.type";
import React from "react";

export const capitalize = (s: string) => {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const composeClasses = <T extends Record<string, string[]>>(
  slots: T,
  getUtilityClass: (slot: string) => string,
  classes: Record<string, string> = {}
) => {
  const result: Record<string, string> = {};
  Object.keys(slots).forEach((slot) => {
    const slotClasses = slots[slot]
      .reduce<string[]>((acc, key) => {
        if (key) {
          acc.push(getUtilityClass(key));
        }
        return acc;
      }, [])
      .filter(Boolean);
    result[slot] = clsx(slotClasses, classes[slot]);
  });

  return result;
};

export const generateUtilityClass = (
  componentName: string,
  slot: string
): string => {
  return `${componentName}-${slot}`;
};

export const generateUtilityClasses = (
  componentName: string,
  slots: string[]
): Record<string, string> => {
  const classes: Record<string, string> = {};
  slots.forEach((slot) => {
    classes[slot] = generateUtilityClass(componentName, slot);
  });
  return classes;
};

export const resolveComponentProps = <T extends object>(
  props: T | ((ownerState: any) => T) | undefined,
  ownerState: any
) => {
  if (typeof props === "function") {
    return props(ownerState);
  }
  return props || {};
};

export const mergeSlotProps = ({
  getSlotProps,
  additionalProps,
  ExternalSlotProps,
  ownerState,
  className,
}: MergeSlotPropsType) => {
  // convert functional to object
  const resolvedExternalSlotProps = resolveComponentProps(
    ExternalSlotProps,
    ownerState
  );

  let mergedProps = {
    ...resolvedExternalSlotProps,
    ...additionalProps,
  } as any;

  if (getSlotProps) {
    const internalProps = getSlotProps(mergedProps);
    mergedProps = {
      ...mergedProps,
      ...internalProps,
    };
  }

  if (className) {
    mergedProps.className = [className, mergedProps.className]
      .filter(Boolean)
      .join(" ");
  }

  return mergedProps;
};

export const useForkRef = (...refs: Array<React.Ref<any> | undefined>) => {
  return React.useMemo(() => {
    const isRefNull = refs.every((ref) => ref == null);
    if (isRefNull) {
      return null;
    }
    return (instance: any) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(instance);
        } else if (ref != null) {
          ref.current = instance;
        }
      });
    };
  }, refs);
};

export const appendOwnerState = <Type extends React.ElementType>(
  elementType: Type,
  otherProps: Record<string, any>,
  ownerState: Record<string, any>
) => {
  if(typeof elementType === "string") {
    // Nếu như element là div hay span thì không cần gán ownerState
    return otherProps
  }

  return {
    ...otherProps,
    ownerState:{
      ...ownerState,
      ...(otherProps?.ownerState && otherProps.ownerState)
    }
  }

};
