export const getSize = (width?: number | string) => {
	if (!width) return 'auto';
	else if (typeof width === 'string') {
		if (
			width.endsWith('px') ||
			width.endsWith('%') ||
			width.endsWith('em') ||
			width.endsWith('rem')
		)
			return width;
	}

	return `${width}px`;
};
