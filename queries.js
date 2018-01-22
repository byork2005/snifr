
// Get all users where email equals param
db.User.findAll({
    where: {
        email: req.params.email
    }
});

// Get all survey results that meet filter requirements
db.Survey.findAll({
    include: [{
        model: Dog,
        where: {
            temperament: req.params.temperament,
            size: {
                [Op.lt]: req.params.size,
            },
            sex: req.params.sex,
            fixed: req.params.fixed
        }
    }],
    attributes: ['a.id'], Survey, as: 'yourDog',
    attributes: ['b.id'], Survey, as: 'matchDog',
    where: {
        attributes: [+Math.abs(a.q1-b.q1)+Math.abs(a.q2-b.q2)+Math.abs(a.q3-b.q3)
            +Math.abs(a.q4-b.q4)+Math.abs(a.q5-b.q5)+Math.abs(a.q6-b.q6)+Math.abs(a.q7-b.q7)
            +Math.abs(a.q8-b.q8)+Math.abs(a.q9-b.q9)+Math.abs(a.q10-b.q10)], as: 'scoreDiff'
       
        
    }
    
})

db.Dog.findAll({
    where: {
        temperament: req.params.temperament,
        size: {
            [Op.lt]: req.params.size,
        },
        sex: req.params.sex,
        neutured_spayed: req.params.neutured_spayed
    },
    include: [{
        model: Survey,
        where: {
            
        }
    }]
})

select a.id mainThing, 
b.id comparingThing, 
abs(a.q1 - b.q1) + abs(a.q2 - b.q2) + abs(a.q3 - b.q3)+ abs(a.q4 - b.q4)+ abs(a.q5 - b.q5)+ abs(a.q6 - b.q6)+ abs(a.q7 - b.q7)+ abs(a.q8 - b.q8)+ abs(a.q9 - b.q9)+ abs(a.q10 - b.q10) scorediff
from surveys as a
inner join surveys as b on a.id != b.id
WHERE a.id =4
order by scorediff asc

// Get all the survey results
db.Survey.findAll({})

// Create New Dog
db.Dog.create({  
    UserId: req.params.UserID,
    name: 'Spot',
    breed: 'Boxer',
    age: 2,
    sex: true,
    size: 30,
    temperament: 3,
    fixed: true,
    photo: "www.google.com",
    description: "A very good girl"
  })

// Create New Survey
db.Survey.create({
    DogId: req.params.DogId,
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
    q5: 2,
    q6: 2,
    q7: 2,
    q8: 2,
    q9: 2,
    q10: 2
})

// Edit a Dog
db.Dog.findOne({  
    dog_id: req.params.dog_id
  })
  .then(dog => {
    dog.updateAttributes({
      name: 'Maizey',
      breed: 'pointer',
      age: 1,
      sex: true,
      size: 35,
      temperament: 2,
      fixed: true,
      photo: 'www.google.com',
      description: 'A very good girl'
    });
  });

//   Edit a Survey
db.Survey.findOne({
    survey_id: 4
})
.then(survey => {
    survey.updateAttributes({
        q1: 2,
        q2: 2,
        q3: 2,
        q4: 2,
        q5: 2,
        q6: 2,
        q7: 2,
        q8: 2,
        q9: 2,
        q10: 2,

    })
})

// Delete a Dog
db.Dog.destory({  
    where: { id: req.params.id}
  })
  .then(deletedPet => {
    console.log(`Has the dog been deleted? 1 means yes, 0 means no: ${deletedPet}`);
  });




