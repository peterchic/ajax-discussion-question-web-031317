$document.ready(function (){
  $('#.btn btn-primary').addEventListener(click, function(){alert("Hello!")})
    var data = $.ajax({
        url: 'https://randomuser.me/api/',
        success: function(response){
            let person = response.results[0]
            let name = person.name
            let location = person.location
            let picture = person.picture

            $('#fullname').text(`${name.title} ${name.first} ${name.last}`)
            $('#email').text(person.email)
            $('#street').text(location.street)
            $('#city').text(location.city)
            $('#state').text(location.state)
            $('#postcode').text(location.postcode)
            $('#phone').text(person.phone)
            $('#cell').text(person.cell)
            $('#date_of_birth').text(person.dob)
            $('#picture').text(picture.medium)

        }
    })


})
