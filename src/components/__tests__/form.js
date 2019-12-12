// validation function => from featuredWorksForm.js 
// this needs to work to prevent data entry issues
function validateForm(data){
    let d = Object.getOwnPropertyNames(data);
    let re = /http/g;
    if(data['link'] !== undefined && !re.test(data[d[4]])) return 0;
    for(let i=0; i< d.length; i++){
      if(data[d[i]] === null || data[d[i]] === undefined) return 0;
    }
    return 1;
}

test('testing ideal form submission', () => {
    let data = {
        name: "asdf",
        title: "asdf",
        class: "text",
        description: "something",
        link: "https://heroku.com"
    }
    let image = { 
        stream: "asdf",
        name: "asdf",
        type: "asdf",
        size: "5234"
    }
    let status = validateForm(data) && validateForm(image);
    expect(status).toBe(1);
});

test('testing empty user submission inputs', () => {
    let image = { 
        stream: "asdf",
        name: "asdf",
        type: "asdf",
        size: "asdf"
    }
    expect(validateForm({name: null,title:"asdf",class:"asdf",description:"asdf",link:"asdf"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title: null,class:"asdf",description:"asdf",link:"asdf"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class: null, description:"asdf",link:"asdf"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class:"asdf",description: null,link:"asdf"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class:"asdf",description:"asdf",link: null}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class:"asdf",description:null,link: "https://google.com"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class:null,description:"asdf",link: "http://google.com"}) && validateForm(image)).toBe(0);
    expect(validateForm({name: "asdf",title:"asdf",class:undefined,description:"asdf",link: "http://google.com"}) && validateForm(image)).toBe(0);
});

test('testing empty image inputs', () => {
    let data = {
        name: "asdf",
        title: "asdf",
        class: "asdf",
        description: "asdf",
        link: "asdf"
    }
    let image = { 
        stream: "asdf",
        name: "",
        type: "",
        size: ""
    }
    expect(validateForm(data) && validateForm({stream: null, name: "asdf", type: "asdf", size: 2048})).toBe(0);
    expect(validateForm(data) && validateForm({stream: "asdf", name: undefined, type: "asdf", size: 2048})).toBe(0);
    expect(validateForm(data) && validateForm({stream: "asdf", name: "asdf", type: null, size: 2048})).toBe(0);
    expect(validateForm(data) && validateForm({stream: "adsf", name: "asdf", type: null, size: undefined})).toBe(0);
    expect(validateForm(data) && validateForm({stream: "asdf", name: "asdf", type: null, size: null})).toBe(0);
});

test('testing variable inputs for both', () => {
    expect(validateForm({name: null}) && validateForm({stream: null, name: "asdf", type: "asdf", size: 2048})).toBe(0);
    expect(validateForm({name: "name here"}) && validateForm({stream: null, name: "asdf", type: "asdf", size: 2048})).toBe(0);
});
