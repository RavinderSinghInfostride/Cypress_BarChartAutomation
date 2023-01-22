class EmiCalculatorHomePage {
    barChartYearPoints = "//*[local-name()='g' and @class='highcharts-series-group']//*[local-name()='rect' and @class='highcharts-point']"
    chartPointText = "//*[local-name()='text' and @x='8']"

    iterateThroughYearChartPoints() {
        cy.VisitLineChartsPage()
        cy.scrollTo(0, 1400)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.xpath(this.barChartYearPoints).then($ele => {
            const numberOfBarChartPoints = $ele.length
            cy.log(numberOfBarChartPoints)
            for (let i = 0; i < numberOfBarChartPoints - 1; i++) {
                cy.wait(1000)
                cy.xpath(this.barChartYearPoints).eq(i).click({ force: true })
                cy.wait(1000)
                cy.xpath(this.chartPointText).then($textBox => {
                    const text = $textBox.text()
                    cy.log(text)
                    expect($textBox).to.contain(text)
                })
            }
        })
    }
}
export default EmiCalculatorHomePage