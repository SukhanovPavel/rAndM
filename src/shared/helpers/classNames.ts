type Mods = Record<string, boolean | undefined | null>;
type ClassValue = string | undefined | null;

export function cn(
  base: string,
  mods?: Mods,
  additional?: ClassValue[]
): string {
  return [
    base,
    ...(additional?.filter(Boolean) ?? []),
    ...Object.entries(mods ?? {})
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}
