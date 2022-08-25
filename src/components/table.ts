type TableProps<Type extends string[]> = {
    title: string
    columns: Type
    rowsData: Type[]
};

class Table<T extends string[]> {
    private static checkCompatability<T extends string[]>(
        props: TableProps<T>,
): boolean {
    const columnNumber = props.columns.length;
    if (columnNumber !== props.rowsData.length) return false;
    return props.rowsData.every((row) => row.length === props.columns.length);
    }

    public htmlElement: HTMLTableElement;

    private props: TableProps<T>;

    private tbody: HTMLTableSectionElement;

    private thead: HTMLTableSectionElement;

    constructor(props: TableProps<T>) {
        this.props = props;

        this.htmlElement = document.createElement('table');

        this.thead = document.createElement('thead');

        this.tbody = document.createElement('tbody');

        this.initialize();

        console.groupCollapsed('no');
        console.log(this.tbody, this.thead);
        console.groupEnd();
}

    public initialize() {
        if (Table.checkCompatability(this.props) !== true) {
            throw new Error('skaičiai Neatitinka jūsų lūkesčių.');
        }
        this.thead.innerHTML = `${
            this.props.columns.map((column) => `<th>${column}</th>`).join('')
        }`;
        this.tbody.innerHTML = '';

        console.log(this.props.columns);
    }
}
export default Table;
