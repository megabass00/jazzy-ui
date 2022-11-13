export const spaceProps = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
] as const;

export type SpaceValue = typeof spaceProps[number];
export type SpaceProps = Partial<Record<SpaceValue, number>>;
