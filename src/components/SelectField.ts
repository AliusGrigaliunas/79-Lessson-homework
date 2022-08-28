export type SelectProps<T> = {
    title: T,
    information:string,
};

class SelectField<T> {
    public htmlElement!: HTMLElement;

    private select: HTMLSelectElement;

    private SelectProps: SelectProps<T>;

    constructor(SelectProps: SelectProps<T>) {
        this.SelectProps = SelectProps;
        const test = document.querySelector<HTMLElement>('#root');

        if (test === null) throw new Error('blet');

        this.htmlElement = test;

        this.select = document.createElement('select');

        this.initialize();
    }

    public initialize() {
        this.select.innerHTML = `
        ${this.SelectProps
            .map((x) => `<option>${x.information}</option>`)}
        `;
        console.log(this.SelectProps);

        this.htmlElement.append(this.select);
    }
}

export default SelectField;
