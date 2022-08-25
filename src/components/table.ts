type TableProps<Type extends string[]> = {
    title: string
    columns: Type
    rowsData: Type[]
};

class Table<T extends string[]> {
    private static checkCompatability<T extends string[]>(
        props: TableProps<T>,
): boolean {
    return props.rowsData.every((row) => row.length === props.columns.length);
    }

    public htmlElement: HTMLTableElement;

    private props: TableProps<T>;

    private tbody: HTMLTableSectionElement;

    private thead: HTMLTableSectionElement;

    constructor(props: TableProps<T>) {
        this.props = props;

        this.htmlElement = document.createElement('table');

        this.htmlElement.className = 'table table-striped';

        this.thead = document.createElement('thead');

        this.thead.className = 'table-dark';

        this.tbody = document.createElement('tbody');

        this.initialize();
}

    public initialize() {
        if (Table.checkCompatability(this.props) !== true) {
            throw new Error('skaičiai Neatitinka jūsų lūkesčių.');
        }
        this.thead.innerHTML = `${
            this.props.columns
                .map((column) => `<th>${column}</th>`)
                    .join('')
        }`;
        this.tbody.innerHTML = `${
            this.props.rowsData
                .map((row) => `<tr>${row
                    .map((rowElement) => `<td>${rowElement}</td>`)
                        .join('')}</tr>`)
                            .join('')
        }`;

        this.htmlElement.innerHTML = `
        ${this.thead.outerHTML}
        ${this.tbody.outerHTML}
        `;
    }
}
export default Table;
