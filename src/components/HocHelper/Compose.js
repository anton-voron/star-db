const Compose = (...funcs) => (comp) => {
	return funcs.reduceRight((prevResult, f) => f(prevResult), comp);
};

export default Compose;