export interface Exercise {
  id: string;
  name: string;
  sets?: string;
  reps?: string;
  duration?: string;
  imageUrl: string;
}

export interface WorkoutDay {
  name: string;
  description: string;
  exercises: Exercise[];
  cardio: Exercise[];
  core: Exercise[];
}

// Exercise image URLs from exercisedb API and placeholder sources
const BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

export const exerciseImages = {
  // Push exercises
  benchPress: `${BASE}Bench_Press_-_Powerlifting/0.jpg`,                 // :contentReference[oaicite:1]{index=1}
  inclineDbPress: `${BASE}Incline_Dumbbell_Press/0.jpg`,                  // :contentReference[oaicite:2]{index=2}
  militaryPress: `${BASE}Military_Press/0.jpg`,                           // :contentReference[oaicite:3]{index=3}
  lateralRaise: `${BASE}Lateral_Raise/0.jpg`,                             // :contentReference[oaicite:4]{index=4}
  tricepsPushdown: `${BASE}Triceps_Pushdown/0.jpg`,                       // :contentReference[oaicite:5]{index=5}
  overheadExtension: `${BASE}Cable_Rope_Overhead_Triceps_Extension/0.jpg`,// 
  inclineBbBench: `${BASE}Incline_Barbell_Bench_Press/0.jpg`,             // :contentReference[oaicite:7]{index=7}
  flatDbPress: `${BASE}Dumbbell_Bench_Press/0.jpg`,                       // :contentReference[oaicite:8]{index=8}
  arnoldPress: `${BASE}Arnold_Dumbbell_Press/0.jpg`,                      // :contentReference[oaicite:9]{index=9}
  frontRaise: `${BASE}Front_Dumbbell_Raise/0.jpg`,                        // :contentReference[oaicite:10]{index=10}
  skullCrusher: `${BASE}EZ-Bar_Skullcrusher/0.jpg`,                       // 
  dips: `${BASE}Parallel_Bar_Dip/0.jpg`,                                  // :contentReference[oaicite:12]{index=12}

  // Pull exercises
  deadlift: `${BASE}Barbell_Deadlift/0.jpg`,                              // :contentReference[oaicite:13]{index=13}
  latPulldown: `${BASE}Lat_Pulldown/0.jpg`,                               // :contentReference[oaicite:14]{index=14}
  bbRow: `${BASE}Bent_Over_Barbell_Row/0.jpg`,                            // :contentReference[oaicite:15]{index=15}
  cableRow: `${BASE}Seated_Cable_Row/0.jpg`,                              // :contentReference[oaicite:16]{index=16}
  bbCurl: `${BASE}Barbell_Curl/0.jpg`,                                    // :contentReference[oaicite:17]{index=17}
  hammerCurl: `${BASE}Hammer_Curls/0.jpg`,                                // :contentReference[oaicite:18]{index=18}
  tbarRow: `${BASE}T-Bar_Row/0.jpg`,                                      // :contentReference[oaicite:19]{index=19}
  facePull: `${BASE}Face_Pull/0.jpg`,                                     // :contentReference[oaicite:20]{index=20}
  chinUp: `${BASE}Chin-Up/0.jpg`,                                         // :contentReference[oaicite:21]{index=21}
  preacherCurl: `${BASE}Preacher_Curl/0.jpg`,                             // :contentReference[oaicite:22]{index=22}
  concentrationCurl: `${BASE}Standing_Concentration_Curl/0.jpg`,          // :contentReference[oaicite:23]{index=23}

  // Leg exercises
  squat: `${BASE}Barbell_Full_Squat/0.jpg`,                               // :contentReference[oaicite:24]{index=24}
  rdl: `${BASE}Romanian_Deadlift/0.jpg`,                                  // :contentReference[oaicite:25]{index=25}
  legPress: `${BASE}Leg_Press/0.jpg`,                                     // :contentReference[oaicite:26]{index=26}
  lunges: `${BASE}Bodyweight_Walking_Lunge/0.jpg`,                        // :contentReference[oaicite:27]{index=27}
  legCurl: `${BASE}Lying_Leg_Curls/0.jpg`,                                // :contentReference[oaicite:28]{index=28}
  calfRaise: `${BASE}Standing_Calf_Raises/0.jpg`,                         // :contentReference[oaicite:29]{index=29}

  // Cardio (all from same verified dataset)
  treadmill: `${BASE}Running_Treadmill/0.jpg`,                            // :contentReference[oaicite:30]{index=30}
  cycling: `${BASE}Recumbent_Bike/0.jpg`,                                 // :contentReference[oaicite:31]{index=31}
  rowing: `${BASE}Rowing_Stationary/0.jpg`,                               // :contentReference[oaicite:32]{index=32}
  elliptical: `${BASE}Elliptical_Trainer/0.jpg`,                          // :contentReference[oaicite:33]{index=33}

  // Core
  crunches: `${BASE}Crunches/0.jpg`,                                      // :contentReference[oaicite:34]{index=34}
  legRaise: `${BASE}Hanging_Leg_Raise/0.jpg`,                             // :contentReference[oaicite:35]{index=35}
  heelTouch: `${BASE}Alternate_Heel_Touchers/0.jpg`,                      // :contentReference[oaicite:36]{index=36}
  plank: `${BASE}Push_Up_to_Side_Plank/0.jpg`,                            // :contentReference[oaicite:37]{index=37}
  bridge: `${BASE}Glute_Bridge/0.jpg`,                                    // :contentReference[oaicite:38]{index=38}

  // Rest day
  rest: `${BASE}Childs_Pose/0.jpg`                                        // (nice “rest/recovery” visual)
};


export const workoutData: { [key: number]: WorkoutDay } = {
  1: { // Monday - Push Day
    name: 'PUSH DAY',
    description: 'Chest, Shoulders & Triceps',
    exercises: [
      { id: 'mon-1', name: 'Barbell Bench Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.benchPress },
      { id: 'mon-2', name: 'Incline Dumbbell Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.inclineDbPress },
      { id: 'mon-3', name: 'Barbell Military Shoulder Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.militaryPress },
      { id: 'mon-4', name: 'Side Lateral Raises', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.lateralRaise },
      { id: 'mon-5', name: 'Triceps Pushdowns', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.tricepsPushdown },
      { id: 'mon-6', name: 'Overhead Dumbbell Extension', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.overheadExtension },
    ],
    cardio: [
      { id: 'mon-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.treadmill }
    ],
    core: [
      { id: 'mon-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'mon-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'mon-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'mon-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'mon-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  2: { // Tuesday - Pull Day
    name: 'PULL DAY',
    description: 'Back & Biceps',
    exercises: [
      { id: 'tue-1', name: 'Deadlift', sets: '4', reps: '10', imageUrl: exerciseImages.deadlift },
      { id: 'tue-2', name: 'Lat Pulldown', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.latPulldown },
      { id: 'tue-3', name: 'Barbell Row', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.bbRow },
      { id: 'tue-4', name: 'Seated Cable Row', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.cableRow },
      { id: 'tue-5', name: 'Barbell Curl', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.bbCurl },
      { id: 'tue-6', name: 'Hammer Curl', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.hammerCurl },
    ],
    cardio: [
      { id: 'tue-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.cycling }
    ],
    core: [
      { id: 'tue-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'tue-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'tue-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'tue-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'tue-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  3: { // Wednesday - Legs
    name: 'LEG DAY',
    description: 'Quads, Hamstrings & Calves',
    exercises: [
      { id: 'wed-1', name: 'Barbell Squat', sets: '4', reps: '15', imageUrl: exerciseImages.squat },
      { id: 'wed-2', name: 'Romanian Deadlift', sets: '4', reps: '10', imageUrl: exerciseImages.rdl },
      { id: 'wed-3', name: 'Leg Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.legPress },
      { id: 'wed-4', name: 'Walking Lunges', sets: '3', reps: '10', imageUrl: exerciseImages.lunges },
      { id: 'wed-5', name: 'Seated Hamstring Curl', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.legCurl },
      { id: 'wed-6', name: 'Standing Calf Raises', sets: '5', reps: '15', imageUrl: exerciseImages.calfRaise },
    ],
    cardio: [
      { id: 'wed-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.rowing }
    ],
    core: [
      { id: 'wed-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'wed-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'wed-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'wed-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'wed-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  4: { // Thursday - Push Day
    name: 'PUSH DAY',
    description: 'Chest, Shoulders & Triceps',
    exercises: [
      { id: 'thu-1', name: 'Incline Barbell Bench', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.inclineBbBench },
      { id: 'thu-2', name: 'Dumbbell Flat Bench Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.flatDbPress },
      { id: 'thu-3', name: 'Arnold Press', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.arnoldPress },
      { id: 'thu-4', name: 'Front Raises', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.frontRaise },
      { id: 'thu-5', name: 'Skull Crushers', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.skullCrusher },
      { id: 'thu-6', name: 'Seated Dips', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.dips },
    ],
    cardio: [
      { id: 'thu-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.elliptical }
    ],
    core: [
      { id: 'thu-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'thu-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'thu-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'thu-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'thu-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  5: { // Friday - Pull Day
    name: 'PULL DAY',
    description: 'Back & Biceps',
    exercises: [
      { id: 'fri-1', name: 'Barbell Row', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.bbRow },
      { id: 'fri-2', name: 'T-Bar Row', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.tbarRow },
      { id: 'fri-3', name: 'Face Pulls', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.facePull },
      { id: 'fri-4', name: 'Chin-Ups', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.chinUp },
      { id: 'fri-5', name: 'Preacher Curl', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.preacherCurl },
      { id: 'fri-6', name: 'Concentration Curl', sets: '3-4', reps: '15-20', imageUrl: exerciseImages.concentrationCurl },
    ],
    cardio: [
      { id: 'fri-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.treadmill }
    ],
    core: [
      { id: 'fri-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'fri-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'fri-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'fri-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'fri-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  6: { // Saturday - Compound
    name: 'COMPOUND DAY',
    description: 'Full Body Strength',
    exercises: [
      { id: 'sat-1', name: 'Barbell Squats', sets: '4', reps: '10-15', imageUrl: exerciseImages.squat },
      { id: 'sat-2', name: 'Bench Press', sets: '4', reps: '10-15', imageUrl: exerciseImages.benchPress },
      { id: 'sat-3', name: 'Barbell Rows', sets: '4', reps: '10-15', imageUrl: exerciseImages.bbRow },
      { id: 'sat-4', name: 'Overhead Military Press', sets: '4', reps: '10-15', imageUrl: exerciseImages.militaryPress },
      { id: 'sat-5', name: 'Deadlift', sets: '4', reps: '10', imageUrl: exerciseImages.deadlift },
    ],
    cardio: [
      { id: 'sat-cardio', name: 'Cardio Session', duration: '15-20 min', imageUrl: exerciseImages.cycling }
    ],
    core: [
      { id: 'sat-core-1', name: 'Half Crunches', sets: '3', reps: '15', imageUrl: exerciseImages.crunches },
      { id: 'sat-core-2', name: 'Single Leg Raises', sets: '3', reps: '15', imageUrl: exerciseImages.legRaise },
      { id: 'sat-core-3', name: 'Heel Touches', sets: '3', reps: '15', imageUrl: exerciseImages.heelTouch },
      { id: 'sat-core-4', name: 'Knee Plank', sets: '3', duration: '1 min', imageUrl: exerciseImages.plank },
      { id: 'sat-core-5', name: 'Pelvic Bridge', sets: '3', duration: '1 min', imageUrl: exerciseImages.bridge },
    ]
  },
  7: { // Sunday - Rest
    name: 'REST DAY',
    description: 'Recovery & Light Activity',
    exercises: [
      { id: 'sun-1', name: 'Active Recovery', duration: '30 min', imageUrl: exerciseImages.rest },
    ],
    cardio: [
      { id: 'sun-cardio', name: 'Light Walk or Yoga', duration: '20-30 min', imageUrl: exerciseImages.rest }
    ],
    core: []
  }
};