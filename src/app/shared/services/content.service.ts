import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  data = {
    'about': {},
    'config': {},
    'experience': {},
    'projects': {},
    'header': {}
  };
  grey: string = "#292929";

  constructor(private router: Router) {
    this.data['header'] = this._getHeader();
    this.data['about'] = this._getAbout();
    this.data['config'] = this._getConfig();
    this.data['experience'] = this._getExperience();
    this.data['projects'] = this._getProjects();
  }

  getData(arrayOfKeys) {
    let ret = this.data;
    for (let key of arrayOfKeys) {
      ret = ret[key];
    }
    return ret;
  }

  getProjectForContext() {
    return this.getData(['projects'].concat(this.router.url.slice(1).split('/')));
  }

  _createContentObject(idx, name, position, dateRange, location, imgPath, url, tags, content, modalContent, cssObj, partialURI = ""): Object {
    return {
      'index': idx,
      'name': name,
      'position': position,
      'dateRange': dateRange,
      'location': location,
      'imgPath': imgPath,
      'siteurl': url.site,
      'githuburl': url.github,
      'tags': tags,
      'content': content,
      'modalContent': modalContent,
      'css': cssObj,
      'partialURI': partialURI
    };
  }

  _getHeader(): Object {
    return {
      'headers': ['Developer.', 'Athlete.', 'Architect.'],
      'expressions': [
        'I Google better than your average bear',
        // "It's not a bug it's a feature",
        'It works on my machine',
        'I � Unicode'
        // "That's not a data breach ... it's a surprise backup"
      ],
      'imgPath': 'url("assets/img/codesnippet-min.webp")'
    };
  }

  _getAbout(): Object {
    return {
      'name': 'David',
      'imgPath': 'assets/img/profile.webp', // Relative path
      'schoolTerm': '3rd year', // Ex. 2B
      'internshipDate': 'Summer 2021 (May-Aug)',
      'bigSplash': 'Software Developer'
    };
  }

  _getConfig(): Object {
    return {
      'faviconPath': './favicon.ico',
      'resumePath': 'assets/docs/peet_david_resume.pdf',
      'windowTitle': 'David Peet',
      'links': {
        'github': 'https://github.com/DavidPeet8',
        'linkedIn': 'https://www.linkedin.com/in/dapeet/',
        'email': 'dapeet@uwaterloo.ca',
        'phone': '' //tel:+1-XXX-XXX-XXXX
      },
    };
  }

  _getExperience(): Object {
    return {
      'huawei': this._createContentObject(
        2,
        'Huawei',
        'Compiler Software Engineering Intern',
        'Sept - Dec 2020',
        'Toronto, Ontario',
        'assets/img/huawei.webp',
        { site: 'https://www.huawei.com/' },
        ['C++', 'OpenCL', 'LLVM'],
        {
          'splash': 'Building out a heterogeneous optimizing compiler for GPU shaders and GPU compute workloads',
        },
        {},
        { 'color': this.grey }
      ),
      'mcafee': this._createContentObject(
        1,
        'McAfee',
        'Software Developer Intern',
        'Jan - Apr 2020',
        'Waterloo, Ontario',
        'assets/img/mcafee.webp',
        { site: 'https://www.mcafee.com/' },
        ['C++', 'Bash', 'Angular'],
        {
          'splash': 'Reducing install time of McAfee security solutions including Windows System Security and McAfee Gamer Security',
        },
        {},
        { 'color': this.grey }
      ),
      'axonify': this._createContentObject(
        0,
        'Axonify',
        'Software Developer Intern',
        'May - Aug 2019',
        'Waterloo, Ontario',
        'assets/img/axonify.webp',
        { site: 'https://axonify.com/' },
        ['Java', 'JS', 'Hibernate', 'Backbone.js'],
        {
          'splash': 'Designing & implementing new features for employee onboarding in the employee training system of tomorrow',
        },
        {},
        { 'color': this.grey }
      ),
    };
  }

  _getProjects(): Object {
    return {
      'bloodhound': this._createContentObject(
        11,
        'BLOODHOUND',
        null,
        2020,
        null,
        'assets/img/mcheck.webp',
        { github: 'https://github.com/DavidPeet8/Bloodhound' },
        ['C/C++', 'Kernel'],
        {
          'splash': 'HTTP Packet Sniffer displaying contents of all HTTP network traffic',
        },
        {
          imgSrc: [],
          description: `
            Bloodhound is cool :D
            `,
          improvements: [
            'Allow for packet dropping based on a list of partial URI\'s',
          ],
          details: [
          ]
        },
        { 'color': 'white', 'display': 'none' },
        '/bloodhound'
      ),

      'binary-io': this._createContentObject(
        10,
        'BINARY IO',
        null,
        2020,
        null,
        'assets/img/binary_io_1.webp',
        {
          github: 'https://github.com/DavidPeet8/BinaryIO'
        },
        ['C++', 'CMake'],
        {
          'splash': 'Directly read and write binary files using a traditional text editor',
        },
        {
          imgSrc: ['assets/img/binary_io_1.webp', 'assets/img/binary_io_2.webp'],
          description: `
            Binary IO is a tool for:
            <ul>
              <li>Encoding human readable ascii codes representing binary into its machine representation</li>
              <li>Decoding a non-human readable binary file into it's human readable ascii representation</li>
            </ul>
            Although impractical for binary patching, Binary IO is a useful tool for understanding binary formats and
            investigating small non human readable files.
            <br>
            I created Binary IO in my spare time while working at Huawei to assist me in investigating migrating the Huawei
            GPU compiler backend to use ELF Object format files instead of a proprietary format.
          `,
          improvements: [
            'Improve formatting of output when reading large binaries',
            'Add addresses of bytes on each line when reading a binary'
          ],
          details: [
            'Ideal for investigating small non human readable files',
            'Ideal for learning the representation of a binary file format'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/binary-io'
      ),

      'note-modules': this._createContentObject(
        10,
        'NOTE MODULES',
        null,
        2020,
        null,
        'assets/img/note_modules_2.webp',
        {
          github: 'https://github.com/DavidPeet8/Note-Modules',
          site: 'https://davidpeet8.github.io/Note-Modules/#/'
        },
        ['C++', 'Angular', 'Python'],
        {
          'splash': 'Create & organize stylish technical documents without duplicating information (and giving everyone a headache)',
        },
        {
          imgSrc: ['assets/img/note_modules_1.webp', 'assets/img/note_modules_3.webp', 'assets/img/note_modules_4.webp'],
          description: `
            Note Modules is a storage and rendering application for notes focused on avoiding duplicate information. To achieve this Note Modules follows a local storage architecture. This architecture allows the user to work on notes regardless of network connection and simultaneously eliminates network latency providing blazing-fast searching.
            To keep your collection of notes safe from device failure, Note Modules backs your collection up to GitHub, also allowing you to clone and work on your note archive on another device without a second thought.
            Coming with a powerful CLI, Note Modules is the perfect tool for taking beautiful, cohesive notes while remaining a solution that will scale without issue, keeping your collection of notes manageable even as your archive expands.
          `,
          improvements: [
            'Add editing capabilities from the browser',
            'Add a tab bar to allow opening multiple notes at once',
            'Fix the overscroll feature',
            'Add a threadpool implementation for preprocessing notes, and gauge benefits',
          ],
          details: [
            'Notes backed up on Github in case of device failures',
            'Parallel processes allow for highly modular and testable code',
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/note-modules'
      ),

      'deadline': this._createContentObject(
        9,
        'DEADLINE',
        null,
        2020,
        null,
        'assets/img/todo_splash.webp',
        {
          github: 'https://github.com/DavidPeet8/deadline',
          site: 'https://davidpeet8.github.io/deadline/#/'
        },
        ['Angular', 'Firestore', 'Authentication'],
        {
          'splash': 'Minimalistic method of organizing reminders with seamless workflow integration',
        },
        {
          imgSrc: ['assets/img/todo_main.webp', 'assets/img/todo_add_screen.webp', 'assets/img/todo_all_done.webp', 'assets/img/todo_login.webp'],
          description: `
            Deadline is a minimalist but fully featured todo list implementation. Secured using OAuth for your peace of mind, Deadline is the ideal application for organizing the plethora of tasks regularly demanding your attention.
          `,
          improvements: [
            'Add due dates for todo items',
            'Add integration with google calendar',
            'Add email / push notifications on nearing deadlines'
          ],
          details: [
            'Utilizes OAuth for authentication',
            'Clean and minimalist UI providing enjoyable experience',
            'Accessible from multiple devices simultaneously'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/deadline'
      ),

      'memory-sanitizer': this._createContentObject(
        8,
        'MEMORY SANITIZER',
        null,
        2020,
        null,
        'assets/img/mcheck.webp',
        { github: 'https://github.com/DavidPeet8/Memory-Sanitizer' },
        ['C/C++', 'Make'],
        {
          'splash': 'Software shim monitoring process memory consumption & checking for leaks',
        },
        {
          imgSrc: [],
          description: `
            Memory Sanitizer allows users to track the heap memory consumption of a C++ executable without the need to recompile. Memory Sanitizer has a similar purpose to Valgrind, but it's bare-bones implementation allows it to give useful information while running >100x faster than Valgrind.  This project is a shim - a peice of code that lies between an executing process and shared libraries it uses. Although my implementation will run much faster than Valgrind, it is unable to produce code snippets and line numbers for detected leaks.
            <br/>
            <br/>
            It's worth noting in the image above that Foo only has 20 bytes worth of data to store, yet the report indicates that 24 bytes were requested. This is due to the compiler. The compiler believes the program will run faster if all data members of struct Foo are aligned to 8 byte boundaries, so it pads the int field with another 4 bytes of unused space.
          `,
          improvements: [
            'Add external plugin support to modify shim behavior',
            'Shim malloc and free as well as other C style memory manipulation to allow for memcheck of C programs'
          ],
          details: [
            'Works on C++ executables using new \& delete to allocate/deallocate memory',
            'No need to recompile the binary you are sanitizing',
            '>100x Faster than Valgrind',
            'Utilizes Kernel persistent IPC, enabling future support for external plugins to message the shim, modifying behavior',
            'Implements DLL hijacking enabling library call interception by forcing new and delete symbol resolution before libstdc++ is linked',
            'Leverages static linking of the standard library to prevent infinite new recursion and separate the library heap space from the client',
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/memory-sanitizer'
      ),

      'website': this._createContentObject(
        7,
        'PERSONAL WEBSITE',
        null,
        2020,
        null,
        'assets/img/website.webp',
        { github: 'https://github.com/DavidPeet8/website' },
        ['JS', 'Angular'],
        {
          'splash': 'A place to share my interests & past projects',
        },
        {
          imgSrc: ['assets/img/website2.webp', 'assets/img/website3.webp', 'assets/img/website4.webp'],
          description: `
            Creating my personal website served both as an introduction to Angular 9 and a way of updating my previous website to increase maintainability. My previous websites have been composed of only the base web languages HTML, CSS, and JS. While I gained a deep understanding of those languages throughout previous website iterations, those sites lacked maintainability due to the poor reusability of both HTML and CSS.
          `,
          improvements: [
            'Paginate projects displayed and utilize lazy loading to decrease site load latency'
          ],
          details: [
            'Leveraged Angular to create maintainable, scalable code',
            'Utilized Sass - precompiled CSS to improve styling maintainability'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/website'
      ),

      'payment-tracker': this._createContentObject(
        6,
        'PAYMENT TRACKER',
        null,
        2019,
        null,
        'assets/img/coin-magnet.webp',
        { github: 'https://github.com/DavidPeet8/Payment-Tracker' },
        ['Java', 'Spring', 'REST', 'Postgresql'],
        {
          'splash': 'Tracker for upcoming banking payments made to make life simpler',
        },
        {
          imgSrc: [],
          description: "This app was designed to give me some experience developing REST API's and programmatically interfacing with relational database software.",
          improvements: [
            'Implement a UI for easier use',
          ],
          details: [
            'Leverages Java <b>Spring</b> to expose <b>API endpoints</b>',
            'Utilizes <b>RESTful data transfer</b> to return data to caller',
            'Utilizes <b>Relational Database</b> for storage due to relational nature of banking data'
          ]
        },
        { 'color': 'white', 'display': 'block', 'background-position': '50% 40%' },
        '/payment-tracker'
      ),

      'branch-visualizer': this._createContentObject(
        5,
        'BRANCH VISUALIZER',
        null,
        2019,
        null,
        'assets/img/git-branch-hierarchy.webp',
        { github: 'https://github.com/DavidPeet8/Branch-Visualizer' },
        ['Git', 'Java'],
        {
          'splash': 'Source control visualizer - your best friend for generating correct diffs for code review',
        },
        {
          imgSrc: ['assets/img/git-branch-hierarchy-square.webp'],
          description: 'Git branch hierarchy solves the issue of remembering the parent branch for a feature branch when trying to create a code review. Git stores branches in a flat list format, which effectively removes information about the base branch for any given branch. Without extra tooling, developers need to keep track of the branch tree for their local repository themselves. In projects where one developer is simultaneously working on multiple branches or is waiting for changes from another team, it becomes difficult to keep track of the branch tree. This scenario was the inspiration for this project. This project serves as a replacement for the Git branch command, but only supporting branch creation and deletion.',
          improvements: [
            'Look into overwriting the Git namespace allowing for identical command line interface',
            'Support additional flags for the "git branch" command'
          ],
          details: [
            'Leverages the Java <b>serializable interface</b> for <b>persisting</b> branch <b>structure</b>',
            'Applies <b>IPC</b> to <b>retrieve</b> the current branch and other <b>state information</b>'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/branch-visualizer'
      ),

      'site-spotlight': this._createContentObject(
        4,
        'SITE SPOTLIGHT',
        null,
        2019,
        null,
        'assets/img/highlight-sites.webp',
        { github: 'https://github.com/DavidPeet8/Site-Spotlight' },
        ['JS', 'JQuery'],
        {
          'splash': 'Boosting productivity by highlighting search results you\'re interested in',
        },
        {
          imgSrc: [],
          description: "Highlight Sites was written to assist my development workflow. When googling the implementation of anything, especially with markup, there are a few sites that have routinely proved to be more useful than all others. I created Highlight Sites to allow me to quickly locate search results that I would likely find useful.",
          improvements: [
            'Consider cleaning up the DOM queries, methods of applying styles to individual search results are a bit janky'
          ],
          details: [
            'Leveraged <b>JQuery</b> for DOM manipulation'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/site-spotlight'
      ),

      'gravitate': this._createContentObject(
        3,
        'GRAVITATE',
        null,
        2019,
        null,
        'assets/img/highlight-sites.webp',
        { github: 'https://github.com/DavidPeet8/Gravitate' },
        ['JS'],
        {
          'splash': 'Physics simulation of bodies orbiting a mass',
        },
        {
          imgSrc: [],
          description: "Short project exploring modeling physics concepts with software.",
          improvements: [
            'Fix the classic bullet through paper problem'
          ],
          details: [
            'Hit detection is implemented using pythagorean theorem and radius widths'
          ]
        },
        { 'color': 'white', 'display': 'none' },
        '/gravitate'
      ),

      'beautiful-newtab': this._createContentObject(
        2,
        'BEAUTIFUL NEWTAB',
        null,
        2018,
        null,
        'assets/img/newtab.webp',
        { github: 'https://github.com/DavidPeet8/Beautiful-NewTab' },
        ['JS', 'Firebase'],
        {
          'splash': 'Stylish Newtab page putting you one keystroke away from your favourite sites',
        },
        {
          imgSrc: ['assets/img/newtab2.webp'],
          description: "Beautiful NewTab is designed to have a personal touch while providing increased functionality. This newtab page includes hotkeys to launch favourite websites and personal memos to keep track of tasks to do today.",
          improvements: [
            'Sanitize user input to prevent unwanted input rendering',
            'Improve scalability for different browser window sizes'
          ],
          details: [
            'Leveraged <b>Firebase</b> to persist daily memos which reset at the end of the day',
            'Although user input is not sanitized, as there is no backend and every user has their own page, there is no security risk'
          ]
        },
        { 'color': 'white', 'display': 'block', 'background-position': '50% 0%' },
        '/beautiful-newtab'
      ),

      'terraria': this._createContentObject(
        1,
        'TERRARIA',
        null,
        2017,
        null,
        'assets/img/terraria.webp',
        { github: 'https://github.com/DavidPeet8/Terraria' },
        ['Java', 'LibGDX', 'Box2D'],
        {
          'splash': 'Terraria... but with a dash of MS Windows comedy',
        },
        {
          imgSrc: ['assets/img/terraria1.webp', 'assets/img/terraria2.webp'],
          description: "My Terraria Emulation was inspired by the game Terraria. The goal of this project was to implement core features of the game while keeping a casual feel, which turned into a Windows parody.",
          improvements: [
            'Implement <b>enemy collision detection and damage</b> (as well as different images for player vs enemies)',
            'Write equipment crafting mechanics',
            'Remove world boundaries, implement <b>runtime random terrain generation</b> allowing for an infinite map',
            'Provide an <b>admin mode</b> for testing purposes - provide one hit kill for both enemies and resources'
          ],
          details: [
            'Utilizes <b>Perlin Noise</b> to implement pseudo-random terrain generation and resource distribution',
            'Implements <b>discrete hit detection</b>, preventing the classic <b>bullet through paper</b> problem',
            'Supports Terraria basics such as <b>resource mining</b> and <b>collection</b>, resource <b>placement</b>, inventory item selection, and item location swapping in the inventory',

          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/terraria'
      ),

      'line-bot': this._createContentObject(
        0,
        'LINE FOLLOWING ROBOT',
        null,
        2014,
        null,
        'assets/img/linebot2.webp',
        {},
        ['C', 'PWM'],
        {
          'splash': 'Line following robot with digital and analogue following modes',
        },
        {
          imgSrc: ['assets/img/linebot.webp'],
          description: "This Robot applies knowledge of circuit design and hardware components combined with C source code to smooth the path of the robot when follwing a line",
          improvements: [
            'Implement the ability to roam in search of a line if started without a line to follow'
          ],
          details: [
            'Utilizes <b>PWM</b> (Pulse Width Modulation) to <b>overcome low power motors</b> - performance is poor when motors are running below 100% power',
            'Manages <b>memory and CPU limitations</b> by considering loop and function call time overhead, as well as efficient memory usage',
            'Applies knowledge of circuit hardware - debugging must be performed using lights in conjunction with an oscilloscope due to inaccessable typical debugging tools'
          ]
        },
        { 'color': 'white', 'display': 'block' },
        '/line-bot'
      ),
    };
  }
}
