export const sizeProps = ['w', 'h'] as const;

export type SizeValue = typeof sizeProps[number];
export type SizePercent = `${number | ''}${number | ''}${number}%`;
export type SizeProps = Partial<Record<SizeValue, number | SizePercent>>;
