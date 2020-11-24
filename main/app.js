function addTokens(input, tokens){
    if (typeof input !== 'string' )
    throw "Invalid input"
    if(input.length<6)
    throw "Input should have at least 6 characters"
    tokens.forEach(t =>{
        if(typeof t.tokenName !== 'string'){
            console.log(t.tokenName)
        throw "Invalid array format"
        }
        });
    if(!input.includes('...'))
    return input
        else
        return input.replace('...', '${'+ tokens[0].tokenName +'}')  
}

const app = {
    addTokens: addTokens
}

module.exports = app;