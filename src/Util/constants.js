//* FORMATTER
const table = require('text-table');
const chunk = (array, size) => {
	const chunked_arr = [];
	let index = 0;
	while (index < array.length) {
		chunked_arr.push(array.slice(index, size + index));
		index += size;
	}
	return chunked_arr;
};
//* FORMATTER FUNCTION
const thingsFormatted = (things) =>
	table(chunk(things.flat(), 2), { align: ['l', ' l'], hsep: '  ' });
//* EXPORT
module.exports = { thingsFormatted };
