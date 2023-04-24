let years;
let months;
let days;

document.querySelector('#btn-ki-valide').addEventListener('click', function (e)
    {
        e.preventDefault();
        console.log(document.querySelectorAll('.inputField'))
        const elemInputs = document.querySelectorAll('.inputField').forEach(function (input) {
        console.log(input.getAttribute('id'))
        if (input.getAttribute('id') === 'yearInput')
        {
            if (input.value !== null)
                years = input.value;
        }
        else if (input.getAttribute('id') === 'monthInput')
        {
            if (input.value !== null)
                months = input.value;
        }
        else if (input.getAttribute('id') === 'dayInput')
        {
            if (input.value !== null)
                days = input.value;
        }
        // console.log(e.currentTarget.getAttribute('id'), this.value)
        console.log(years, months, days);
    })
    })

    
function validate(year, month, day)
{
    let date = new Date();
    console.log(date.getDate());
    if (year <= date.getFullYear())
    {
        console.log(date.getMonth())
    }
}
