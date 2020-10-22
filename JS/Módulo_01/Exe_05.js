function users() {
  let usuarios = [
    {
      nome: "Diego",
      skills: ["JavaScript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];

  console.log(`O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].skills[0]}, ${usuarios[0].skills[1]}, ${usuarios[0].skills[2]}.`)
  console.log(`O ${usuarios[1].nome} possui as habilidades: ${usuarios[1].skills[0]}, ${usuarios[1].skills[1]}, ${usuarios[1].skills[2]}.`)
  
}
users()
