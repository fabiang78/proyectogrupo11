fetch('https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342')
      .then(response => response.json())
      .then(json => console.log(json));