const woData = [
  {
    id: 145,

    workoutName: "Concentration Curl",

    description: "Isolates the biceps using dumbbells with seated position",

    muscle: {
      id: 37,

      muscleName: "Biceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 146,

    workoutName: "Preacher Curl",

    description: "Curls performed on a preacher bench to target the biceps",

    muscle: {
      id: 37,

      muscleName: "Biceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 147,

    workoutName: "Cable Curl",

    description: "Using a cable machine to perform curls for constant tension",

    muscle: {
      id: 37,

      muscleName: "Biceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 148,

    workoutName: "Zottman Curl",

    description: "Combines a regular curl and reverse curl in one movement",

    muscle: {
      id: 37,

      muscleName: "Biceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 149,

    workoutName: "Skull Crusher",

    description: "Lying tricep extension with a barbell or dumbbells",

    muscle: {
      id: 38,

      muscleName: "Triceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 150,

    workoutName: "Close-Grip Bench Press",

    description: "Bench press with a closer grip to target triceps",

    muscle: {
      id: 38,

      muscleName: "Triceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 151,

    workoutName: "Tricep Kickback",

    description: "Bending forward and kicking the dumbbell back",

    muscle: {
      id: 38,

      muscleName: "Triceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 152,

    workoutName: "Rope Pushdown",

    description: "Using a cable machine with a rope attachment for triceps",

    muscle: {
      id: 38,

      muscleName: "Triceps Brachii",

      muscleGroup: "Upper Arm",
    },
  },

  {
    id: 153,

    workoutName: "Front Raise",

    description: "Lifting weights straight in front to shoulder height",

    muscle: {
      id: 39,

      muscleName: "Deltoid",

      muscleGroup: "Shoulder",
    },
  },

  {
    id: 154,

    workoutName: "Reverse Pec Deck Fly",

    description: "Targets the rear deltoids on a pec deck machine",

    muscle: {
      id: 39,

      muscleName: "Deltoid",

      muscleGroup: "Shoulder",
    },
  },

  {
    id: 155,

    workoutName: "Arnold Press",

    description:
      "A rotational shoulder press named after Arnold Schwarzenegger",

    muscle: {
      id: 39,

      muscleName: "Deltoid",

      muscleGroup: "Shoulder",
    },
  },

  {
    id: 156,

    workoutName: "Upright Row",

    description:
      "Lifting weights vertically close to the body to target shoulders",

    muscle: {
      id: 39,

      muscleName: "Deltoid",

      muscleGroup: "Shoulder",
    },
  },

  {
    id: 157,

    workoutName: "Incline Bench Press",

    description: "Bench press on an incline bench to target upper chest",

    muscle: {
      id: 40,

      muscleName: "Pectoralis Major",

      muscleGroup: "Chest",
    },
  },

  {
    id: 158,

    workoutName: "Decline Push Up",

    description: "Push-ups with feet elevated to target lower chest",

    muscle: {
      id: 40,

      muscleName: "Pectoralis Major",

      muscleGroup: "Chest",
    },
  },

  {
    id: 159,

    workoutName: "Cable Fly",

    description: "Performing flyes with a cable machine to target the chest",

    muscle: {
      id: 40,

      muscleName: "Pectoralis Major",

      muscleGroup: "Chest",
    },
  },

  {
    id: 160,

    workoutName: "Chest Dip",

    description: "Dips that focus on the chest by leaning forward",

    muscle: {
      id: 40,

      muscleName: "Pectoralis Major",

      muscleGroup: "Chest",
    },
  },

  {
    id: 161,

    workoutName: "Lat Pulldown",

    description: "Using a lat pulldown machine to target the back",

    muscle: {
      id: 41,

      muscleName: "Latissimus Dorsi",

      muscleGroup: "Back",
    },
  },

  {
    id: 162,

    workoutName: "Single-Arm Dumbbell Row",

    description: "Rowing with a dumbbell, one arm at a time",

    muscle: {
      id: 41,

      muscleName: "Latissimus Dorsi",

      muscleGroup: "Back",
    },
  },

  {
    id: 163,

    workoutName: "T-Bar Row",

    description: "Rowing a T-bar machine or barbell for mid-back",

    muscle: {
      id: 41,

      muscleName: "Latissimus Dorsi",

      muscleGroup: "Back",
    },
  },

  {
    id: 164,

    workoutName: "Chin-Up",

    description: "Pulling oneself up on a bar with palms facing towards you",

    muscle: {
      id: 41,

      muscleName: "Latissimus Dorsi",

      muscleGroup: "Back",
    },
  },

  {
    id: 165,

    workoutName: "Front Squat",

    description: "Squat with the weight held in front of the shoulder",

    muscle: {
      id: 42,

      muscleName: "Quadriceps Femoris",

      muscleGroup: "Legs - Front",
    },
  },

  {
    id: 166,

    workoutName: "Walking Lunge",

    description: "Performing lunges in a walking motion to target the quads",

    muscle: {
      id: 42,

      muscleName: "Quadriceps Femoris",

      muscleGroup: "Legs - Front",
    },
  },

  {
    id: 167,

    workoutName: "Bulgarian Split Squat",

    description: "A lunge performed with the rear leg elevated",

    muscle: {
      id: 42,

      muscleName: "Quadriceps Femoris",

      muscleGroup: "Legs - Front",
    },
  },

  {
    id: 168,

    workoutName: "Leg Extension",

    description: "Using a leg extension machine to isolate the quads",

    muscle: {
      id: 42,

      muscleName: "Quadriceps Femoris",

      muscleGroup: "Legs - Front",
    },
  },

  {
    id: 169,

    workoutName: "Good Morning",

    description:
      "Bending forward with a barbell on the shoulders, targeting hamstrings",

    muscle: {
      id: 43,

      muscleName: "Hamstrings",

      muscleGroup: "Legs - Back",
    },
  },

  {
    id: 170,

    workoutName: "Stiff-Leg Deadlift",

    description: "Deadlift variation focusing on hamstring stretch",

    muscle: {
      id: 43,

      muscleName: "Hamstrings",

      muscleGroup: "Legs - Back",
    },
  },

  {
    id: 171,

    workoutName: "Glute-Ham Raise",

    description: "A bodyweight exercise targeting hamstrings and glutes",

    muscle: {
      id: 43,

      muscleName: "Hamstrings",

      muscleGroup: "Legs - Back",
    },
  },

  {
    id: 172,

    workoutName: "Nordic Hamstring Curl",

    description: "Partner-assisted hamstring curl performed on the ground",

    muscle: {
      id: 43,

      muscleName: "Hamstrings",

      muscleGroup: "Legs - Back",
    },
  },

  {
    id: 173,

    workoutName: "Donkey Calf Raise",

    description: "Calf raise variant where the user leans forward",

    muscle: {
      id: 44,

      muscleName: "Gastrocnemius",

      muscleGroup: "Legs - Calves",
    },
  },

  {
    id: 174,

    workoutName: "Jump Rope",

    description: "Using a jump rope which targets the calves with each jump",

    muscle: {
      id: 44,

      muscleName: "Gastrocnemius",

      muscleGroup: "Legs - Calves",
    },
  },

  {
    id: 175,

    workoutName: "Box Jump",

    description: "Jumping onto and off of a box, targeting the lower leg",

    muscle: {
      id: 44,

      muscleName: "Gastrocnemius",

      muscleGroup: "Legs - Calves",
    },
  },

  {
    id: 176,

    workoutName: "Calf Press On The Leg Press Machine",

    description:
      "Pressing with the legs on a leg press machine focusing on the calves",

    muscle: {
      id: 44,

      muscleName: "Gastrocnemius",

      muscleGroup: "Legs - Calves",
    },
  },

  {
    id: 177,

    workoutName: "Leg Raise",

    description: "Lifting legs to target the lower abdomen",

    muscle: {
      id: 45,

      muscleName: "Rectus Abdominis",

      muscleGroup: "Abs",
    },
  },

  {
    id: 178,

    workoutName: "Bicycle Crunch",

    description: "A crunch variation mimicking a cycling motion",

    muscle: {
      id: 45,

      muscleName: "Rectus Abdominis",

      muscleGroup: "Abs",
    },
  },

  {
    id: 179,

    workoutName: "Hanging Leg Raise",

    description: "Raising legs while hanging from a pull-up bar",

    muscle: {
      id: 45,

      muscleName: "Rectus Abdominis",

      muscleGroup: "Abs",   
    },
  },

  {
    id: 180,

    workoutName: "Russian Twist",

    description: "Twisting the torso with weight for oblique and abs",

    muscle: {
      id: 45,

      muscleName: "Rectus Abdominis", 

      muscleGroup: "Abs",
    },
  },
];

export default woData;
