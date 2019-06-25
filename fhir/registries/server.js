var server = {
    url:"http://localhost:8080/fhir/stu3/",
    sources:[
        {
            target:'repo',
            tag:{
                system:'https://roqr.fhir.co.uk/source',
                code:'local-repo',
                display:'ROQR Local FHIR Store/Repository'
            }
        },
        {
            target:'ccri',
            tag:{
                    system:'https://roqr.fhir.co.uk/source',
                    code:'ccri',
                    display:'NHS Care Connect Reference Implementation'
                },
            url:'https://data.developer.nhs.uk/ccri-fhir/STU3'
        }
    ]
    
}

module.exports = {
    server
}