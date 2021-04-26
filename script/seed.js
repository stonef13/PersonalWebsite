'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Projects = require('../server/db/models/projects')
const Skills = require('../server/db/models/skills')

const projects = [
  {
    name: 'HedgeHog',
    description:
      'A web app to study and copy the strategies of super investors',
    projectUrl: 'https://fsahedgehog.herokuapp.com/'
  },
  {
    name: "Link's Lights",
    description: 'An e-commerce site for the sale of light bulbs',
    projectUrl: 'https://links-lights.herokuapp.com/login'
  }
]

const skills = [
  {
    name: 'Node'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'React'
  },
  {
    name: 'Redux'
  },
  {
    name: 'Express'
  },
  {
    name: 'HTML'
  },
  {
    name: 'CSS'
  },
  {
    name: 'PostgreSQL'
  },
  {
    name: 'Bootstrap'
  },
  {
    name: 'Victory'
  },
  {
    name: 'REST API'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(
    projects.map(project => {
      return Projects.create(project)
    })
  )

  await Promise.all(
    skills.map(skill => {
      return Skills.create(skill)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
