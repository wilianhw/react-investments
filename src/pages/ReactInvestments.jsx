import Header from "../components/Header";
import Investment from "../components/Investment";
import Investments from "../components/Investments";

import { business } from "../data/investments";

export default function ReactInvestments() {

    function formatInvestiments(investments, reports) {
        return investments.map(inv => {
            const rep = reports.filter(report => report.investmentId === inv.id ? true: false);
            return {...inv, rep};
        });
    }

    return (
    <div className="max-w-5xl m-auto">
        <Header />
        <main>
            <Investments business={business}>
                <Investment investments={formatInvestiments(business.investments, business.reports)} />
            </Investments>
        </main>
    </div>
    )
}
