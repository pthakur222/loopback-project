'use strict';

module.exports = function(Country) {

    Country.afterRemote('getCountries',(ctx,country,next)=>{

        let data = ctx.result;
        let finalResult = [];
        data.map((country) => {
            let resultVal = {
                "name" : country.name,
                "Capital" : country.capital,
                "Code" : country.alpha3Code,
                "Currencies" : country.currencies
            };
            finalResult.push(resultVal);
        })
        ctx.result = finalResult;
        next();
    })

};
