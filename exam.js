let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
};


  function Mission1(militaryUnit){
    const rank = militaryUnit.commandStructure.chiefOfStaff.rank
    const name = militaryUnit.commandStructure.chiefOfStaff.name
    const phone = militaryUnit.commandStructure.chiefOfStaff.contact.phone
    const chiefOfStaff = {rank, name, phone}
    return chiefOfStaff
  }

  console.log(Mission1(militaryUnit))

  function Mission2(militaryUnit){
    const personnel = militaryUnit.personnel
    const personnelLength = personnel.length
    return personnelLength
  }

  console.log(Mission2(militaryUnit))

  function Mission3(militaryUnit, newDeployment){
    const currentDeployment = militaryUnit.currentDeployment
    currentDeployment.endDate = newDeployment.estimatedEndDate
    delete currentDeployment.estimatedEndDate
    militaryUnit.history.push(currentDeployment)
    militaryUnit.currentDeployment = newDeployment
    return militaryUnit
  }

  const newDeployment = {location: "Russia", mission: "Anti-Terrorism", startDate: "2023-01-01", estimatedEndDate: "2024-12-31"}
  console.log(Mission3(militaryUnit, newDeployment))

  function Mission4(militaryUnit, newEquipment){
    const equipment = militaryUnit.equipment
    for (const key in equipment){
        const typeArray = equipment[key]
        for (const item of typeArray){
            if (item.type === newEquipment.type && item.status === newEquipment.status){
                militaryUnit.equipment[key][typeArray.indexOf(item)].quantity += newEquipment.quantity
                return militaryUnit
            }
        }
    }
    militaryUnit.equipment.otherEquipment.push(newEquipment)
    return militaryUnit
  }

  const newEquipment = {type: "Field Radios", quantity: 100, status: "Operational"}
  console.log(Mission4(militaryUnit, newEquipment))

  function Mission5(militaryUnit){
    const trainingPrograms = militaryUnit.trainingPrograms
    let trainingProgramsDuration = 0
    for (const item of trainingPrograms){
        trainingProgramsDuration += item.duration
    }
    return trainingProgramsDuration
  }

  console.log(Mission5(militaryUnit))



module.exports = {Mission1, Mission2, Mission3, Mission4, Mission5}