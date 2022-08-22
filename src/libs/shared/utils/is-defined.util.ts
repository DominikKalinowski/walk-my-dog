// @TODO: 15) napisz isDefined type guard który będzie sprawdzał czy obiekt nie ma wartości undefined lub null i odpowiednio go typował

export const isDefined = (object: any): boolean => {
  if (typeof object === null || typeof object === undefined) return false;
  return true;
};
