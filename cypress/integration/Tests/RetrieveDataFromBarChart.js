import EmiCalculatorHomePage from "../../Pages/EmiCalculatorHomePage"

const emiCalculatorHomePage = new EmiCalculatorHomePage()

describe('Bar chart', () => {
    it('Retrive data from bar chart year points', () => {
        emiCalculatorHomePage.iterateThroughYearChartPoints()
    })
})