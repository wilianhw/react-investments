export default function Investment({investments = []}) {

    function getYield(firstValue, lastValue) {
        const className = lastValue > firstValue ? "text-green-400" : lastValue < firstValue ? "text-red-400" : "";
        return <span className={className}>{(lastValue - firstValue).toFixed(2)}%</span>
    }

    function renderValues(currentValue, lastValue = currentValue) {
        const className = currentValue > lastValue ? "text-green-400" : currentValue < lastValue ? "text-red-400" : "";
        return (
            <div className="flex justify-between w-full">
                <div className={className}>{currentValue.toFixed(2)}</div>
                <div className={className}>{(currentValue/lastValue-1).toFixed(2)}%</div>
            </div>
        );
    }

    function orderReports(reports) {
        return reports.sort((a, b) => a.month > b.month ? 1 : a.month < b.month ? -1 : 0);
    }

    function dateNumberToName({month}) {
        switch(month) {
            case 1:
                return 'jan';
            case 2: 
                return'fev';
            case 3:
                return 'mar';
            case 4:
                return 'abr';
            case 5:
                return 'mai';
            case 6:
                return 'jun';
            case 7:
                return 'jul';
            case 8:
                return 'ago';
            case 9:
                return 'set';
            case 10:
                return 'out';
            case 11:
                return 'nov';
            case 12:
                return 'dez';
            default:
                return 'mês inválido';
        }
    }

    function renderReports(reports) {
        const ordened = orderReports(reports);

        return ordened.map((report, index) => {
            return (
                <div key={report.id} className="flex">
                    <div style={{minWidth: "100px"}}>{dateNumberToName(report)}/{report.year}</div>
                    {renderValues(report.value, ordened[index - 1]?.value)}
                </div>
            );
        })
    }

    function renderInvestments(investments) {
        return investments.map(investiment => {
            return (
                <li key={investiment.id}>
                    <div className="text-2xl text-center">
                        <h1 className="mt-2">{investiment.description}</h1>
                        <h2 className="mt-1 mb-2">Rendimento total: {getYield(investiment.rep[0].value, investiment.rep[11].value)}</h2>
                    </div>
                    {renderReports(investiment.rep)}
                </li>
            );
        })
    }

    return (
        <ul>
            {renderInvestments(investments)}
        </ul>
    )
}
