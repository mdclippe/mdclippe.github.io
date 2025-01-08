window.PorfolioConfig = {
  name: 'Mario De Clippeleir',
  jobTitle: 'Freelance software engineer',
  jobDescription: 'Experienced  Software Engineer With a strong background in both embedded systems and higher-level PC applications, I specialize in creating seamless interactions between hardware and software.',

  skills: [
    {
      name: 'Programming Languages',
      items: {
        'C': { percentage: '95%', description: 'Expert in C programming' },
        'C++': { percentage: '90%', description: 'Advanced knowledge of C++' },
        'Python': { percentage: '95%', description: 'Proficient in Python scripting' },
        '.NET / C# / C++ / CLI': { percentage: '70%', description: 'Experienced with .NET systems' },
        'Java': { percentage: '80%', description: 'Some experience with Java systems' },
        'JavaScript / TypeScript': { percentage: '65%', description: '' },
        'Rust': { percentage: '40%', description: 'Learning the RUST language' }
      },
      description: 'Programming Languages proficiency'
    },
    {
      name: 'Frameworks',
      items: {
        'ROS2': { percentage: '85%', description: '' },
        'Bluez' : { percentage: '95%', description: '' },
        'Nordic SDK ': { percentage: '90%', description: 'nRF SDK' },
        'Zephyr SDK ': { percentage: '90%', description: '' },
        'FreeRTOS': { percentage: '90%', description: '' },
        'QEMU ': { percentage: '90%', description: '' },
        'CMake ': { percentage: '95%', description: '' },
        'Make': { percentage: '95%', description: '' },
        'Yocto ': { percentage: '70%', description: '' },
        'GoogleTest ': { percentage: '80%', description: '' },
        'NUnit / Junit ': { percentage: '80%', description: '' },
        'Unity ': { percentage: '90%', description: '' },
        'ESP32-IDF ': { percentage: '90%', description: '' },
        'OpenCV' : { percentage: '60%', description: 'Used quite some time ago....' },
        'Flask / FastAPI' : { percentage: '85%', description: '' },
      },
      description: 'Used frameworks and SDKs'
    },
    { 
      name: 'Protocols',
      items: {
        'BLE': { percentage: '95%', description: '' },
        'Bluetooth ': { percentage: '95%', description: '' },
        'ZigBee ': { percentage: '90%', description: '' },
        'WiFi ': { percentage: '90%', description: '' },
        'MQTT': { percentage: '90%', description: '' },
        'D-BUS': { percentage: '90%', description: '' },

        'CAN / CANOpen ': { percentage: '90%', description: '' },
        'SPI / UART / I2C': { percentage: '90%', description: '' },
        'LoraWan ': { percentage: '90%', description: '' },
        'Matter ': { percentage: '90%', description: '' },
        'DFU / OTA ': { percentage: '90%', description: 'Device Firmware Update // over the air updates' },
        'ProtocolBuffers / flatbuffers ': { percentage: '90%', description: '' },
        'XML / JSON / YAML / ...  ' : { percentage: '90%', description: '' },
        'Websockets ': { percentage: '90%', description: '' },

        'OpenAPI / RESTApi' : { percentage: '90%', description: '' },

      },
      description: 'Used protocol / interfaces technologies'
    },
    {
      name: 'Hardware',
      items: {
        'ARM': { percentage: '95%', description: '' },
        'NRF52': { percentage: '95%', description: '' },
        'iMX9': { percentage: '95%', description: '' },
        'STM32': { percentage: '95%', description: '' },
        'ESP32': { percentage: '95%', description: '' },
        'baremetal chipsets': { percentage: '95%', description: '' },
        'RaspBerry Pi': { percentage: '95%', description: '' },
      },
      description: ''
    },
    {
      name: 'Tooling',
      items: {
        'Linux': { percentage: '95%', description: '' },
        'MacOS': { percentage: '95%', description: '' },
        'Windows': { percentage: '95%', description: '' },
        'Git / BitBucket / Gitlab': { percentage: '95%', description: '' },
        'Jira / Gitlab': { percentage: '95%', description: '' },
        'GDB / OpenOCD / ': { percentage: '95%', description: '' },
        'TeamCity / Jenkins / Gitlab pipelines / Jira pipelines': { percentage: '95%', description: '' },
        'Confluence': { percentage: '95%', description: '' },
        'Plantuml / Visio': { percentage: '95%', description: '' },
        'Docker': { percentage: '95%', description: '' },
        'Logic Analyzers / Oscilloscope / Can Sniffers/ RF Power Meter / RF Spectrum Analyser / multimeter': { percentage: '95%', description: '' },
      },

      description: ''
    }
  ],
  courses: [
    {
      name: 'Udacity : C++ (v11 - v20)',
      link: 'http://udacity.com',
      description: 'Course to update my knowledge to modern C++'
    },
    {
      name: 'Working with Agilent Signal Analyzers',
      link: '',
      description: 'Course to really understand the Signal Analyzer workings'
    },
    {
      name: 'Project Management',
      link: 'https://www.cevora.be/',
      description: ''
    },
    {
      name: 'Programming ADO.Net in C#',
      link: 'https://www.cevora.be/',
      description: ''
    },
    {
      name: 'Programming with XML in C#',
      link: 'https://www.cevora.be/',
      description: ''
    },
    {
      name: 'Sound Engineering',
      link: 'https://www.lgo.be/',
      description: 'I followed this course when i worked for Solid State Logic (Audio company) and also out of personal interest'
    },
    {
      name: 'Medical Devices',
      link: '',
      description: 'Good clinical practice.'
    },
    {
      name : 'Standards',
      link: '',
      description : 'ISO 13485 (medical), ISO 9001 (QMS), ISO 14001 (EMS), IEC 61000 (EMC), IEC 62304, IEC 60601 '
    }
  ],
  works: [
    {
      name: 'Atlas Copco : Airtech division',
      link: 'https://atlascopco.com',
      description: 'Work on next generation platform for compressors'
    },
    {
      name: 'PSA HNN (previously Cosmos NV)',
      link: 'https://www.psa-antwerp.be/nl',
      description: 'Ports Container yard planning software'
    },
    {
      name: 'Duratech',
      link: 'https://www.duratech.be/',
      description: 'Next-gen smart swimming pool systems'
    },
    {
      name: 'eNovates',
      link: 'https://www.enovates.com/',
      description: 'Development of charging systems and connectivity'
    },
    {
      name: 'Indigo Diabetes',
      link: 'https://indigomed.com/',
      description: 'Implantable medical device for continuous gluces measurement'
    },
    
    {
      name: 'Octiva',
      link: 'https://octiva.tech/',
      description: 'Agricultural robot development'
    },
    {
      name: 'Solid State Logic (previously Sydec Audio Engineering)',
      link: 'https://solidstatelogic.com/',
      description: 'Software to route different MADI signals. DAW project conversion application. '
    },
    {
      name: 'Verhaert',
      link: 'https://verhaert.com/',
      description: 'Several projects : Software of different parts of a stationary indoor tilt bike, stair lift that is connected to the cloud, coffee recipe maker machine'
    },
    {
      name: 'Viloc',
      link: 'https://www.hwgvolgsystemen.nl/viloc-tag',
      description: 'Tamper-proof tracker'
    },
    {
      name: 'Qorvo (previously Greenpeak Technologies)',
      link: 'https;//www.qorvo.com',
      description: 'Low Power Energy devices / Internet of Things'
    }
  ],
  hobbies: [
    {
      name: 'Drums',
      description: 'Performing as a drummer in a band, showcasing rhythm and creativity during live performances and practice sessions.'
    },
    {
      name: 'Tennis',
      description: 'Competing in tennis matches and practicing regularly to refine technique, agility, and sportsmanship.'
    },
    {
      name: 'Running',
      description: 'Maintaining physical and mental fitness through regular running.'
    }
  ],
  contacts: {
    email: 'mario.declippeleir@gmail.com',
    mobileNo: '++32476815453',
    location: 'Waasmunster, Belgium',
    links: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mario-de-clippeleir-4931a53/'
      },
    ]
  }
};