export const Plural = {
    noun(type, number) {
        return `${type}${(number==1 || number==0) ? "" : "s"}`;
    }
};
