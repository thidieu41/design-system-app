export type MergeSlotPropsType = {
  getSlotProps?: (other?: object) => Record<string, any>;
  additionalProps?: Record<string, any>;
  ExternalSlotProps:
    | Record<string, any>
    | ((state: any) => Record<string, any>);
  ownerState?: any;
  className?: string;
};
