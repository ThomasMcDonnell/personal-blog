<template>
    <layout>
        <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-3">
            <section class="timeline">
                <div class="wrapper-timeline">
                    <div class="wrapper-item">
                        <div class="section-year">
                            <h2 class="year">Bio</h2>
                        </div>
                        <section class="timeline-item">
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">Personal</h2>
                                <p class="description-item">I am enthusiastic about technology and building experiences
                                    for people on today's modern web. I love experimenting and getting my hands as dirty as
                                    possible by building, breaking and fixing. Learning new things and helping others to
                                    do the same is my ultimate passion. For me clear, effective communication is the key
                                    to the success of any endeavor, but the most important thing is to have fun while your
                                    doing it and love what your doing.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="wrapper-timeline">
                    <div class="wrapper-item">
                        <div class="section-year">
                            <h2 class="year">Skills</h2>
                        </div>
                        <section class="timeline-item">
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">Technologies</h2>
                                <div class="description-item flex flex-col sm:flex-row justify-between pt-3">
                                    <div class="sm:w-1/3 w-full">
                                        <ul>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'python']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Python</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'js']"
                                                    style="font-size: 1.5rem; color: #f0db4f;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Javascript</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'php']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon>PHP</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'html5']"
                                                    style="font-size: 1.5rem; color: #e54c25;"
                                                    class="mr-4"
                                            ></font-awesome-icon>HTML5</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'css3']"
                                                    style="font-size: 1.5rem; color: #2096f3;"
                                                    class="mr-4"
                                            ></font-awesome-icon>CSS3</li>
                                        </ul>
                                    </div>
                                    <div class="sm:w-1/3 w-full">
                                        <ul>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'python']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Django</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'python']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Flask</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'laravel']"
                                                    style="font-size: 1.5rem; color: #F05340;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Laravel</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'vuejs']"
                                                    style="font-size: 1.5rem; color: #41b883;"
                                                    class="mr-4"
                                            ></font-awesome-icon>VueJs</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'angular']"
                                                    style="font-size: 1.5rem; color: #dd0130;"
                                                    class="mr-4"
                                            ></font-awesome-icon>Angular</li>
                                        </ul>
                                    </div>
                                    <div class="sm:w-1/3 w-full">
                                        <ul>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'vuejs']"
                                                    style="font-size: 1.5rem; color: #41b883;"
                                                    class="mr-4"
                                            ></font-awesome-icon> Gridsome</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'sass']"
                                                    style="font-size: 1.5rem; color: #1cb0ba;"
                                                    class="mr-4"
                                            ></font-awesome-icon> Tailwind CSS</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'bootstrap']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon> Bootstrap</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'docker']"
                                                    style="font-size: 1.5rem; color: #3b5998;"
                                                    class="mr-4"
                                            ></font-awesome-icon> Docker</li>
                                            <li class="mb-6 flex"><font-awesome-icon
                                                    :icon="['fab', 'linux']"
                                                    style="font-size: 1.5rem; color: #000;"
                                                    class="mr-4"
                                            ></font-awesome-icon> Vagrant &amp; VirtualBox</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="wrapper-timeline">
                    <div class="wrapper-item">
                        <div class="section-year">
                            <h2 class="year">Experience</h2>
                        </div>
                        <section class="timeline-item">
                            <div class="item"
                                 v-if="i < workHistory.length + 1"
                                 v-for="i in historyToShow"
                            >
                                <span class="dot"></span>
                                <h2 class="month-item">{{ workHistory[i -1].place }}</h2>
                                <div class="flex flex-row justify-content-between mt-3">
                                    <h3 class="title-item w-1/2">{{ workHistory[i -1].title }}</h3>
                                    <h3 class="title-item w-1/2">{{ workHistory[i -1].date }}</h3>
                                </div>
                                <p class="description-item">{{ workHistory[i -1].description }}</p>
                                <div v-if=" workHistory[i -1].technologies !== ''">
                                    <h2 class="title-item">Technologies Used</h2>
                                    <p class="description-item">{{ workHistory[i -1].technologies }}</p>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="btn bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-4 border border-green-500 rounded" @click="historyToShow += 1">Load More</button>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="wrapper-timeline">
                    <div class="wrapper-item">
                        <div class="section-year">
                            <h2 class="year">Education</h2>
                        </div>
                        <section class="timeline-item">
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">Dublin Institute of Technology</h2>
                                <div class="flex flex-row justify-content-between mt-3">
                                    <h3 class="title-item w-1/2">Information Systems and Information Technology</h3>
                                    <h3 class="title-item w-1/2">2017 - Present</h3>
                                </div>
                                <p class="description-item"></p>
                            </div>
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">University College Dublin</h2>
                                <div class="flex flex-row justify-content-between mt-3">
                                    <h3 class="title-item w-1/2">Biochemistry & Molecular Biology</h3>
                                    <h3 class="title-item w-1/2">2008 - 2012</h3>
                                </div>
                            </div>
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">Carrick-on-Shannon Community School</h2>
                                <div class="flex flex-row justify-content-between mt-3">
                                    <h3 class="title-item w-1/2">Biochemistry & Molecular Biology</h3>
                                    <h3 class="title-item w-1/2">2005 - 2010</h3>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="wrapper-timeline">
                    <div class="wrapper-item">
                        <div class="section-year">
                            <h2 class="year">Interests</h2>
                        </div>
                        <section class="timeline-item">
                            <div class="item">
                                <span class="dot"></span>
                                <h2 class="month-item">Personal Interests</h2>
                                <p class="description-item">In my spare time I enjoy reading and writing about the latest
                                    and greatest technology trends in the tech space today. I also enjoy tutoring other students and
                                    helping them understand and navigate the computer science space. I have a deep love for
                                    cultures and languages that differ to my own and enjoy practicing and improving my Portuguese
                                    language skills.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </layout>
</template>

<script>

    export default {
        name: "cv",
        data() {
           return{
               workHistory: [
                   {
                       place: 'Agriland Media',
                       title: 'Junior Software Developer',
                       date: 'Feb 2019 - Present',
                       description: 'Responsible for maintaining and developing the suite of Agriland products and internal systems. Participate in requirements gathering, feature/system design and implementation in accordance with agile methodologies. Participate in the development of automation scripts for UAT testing and general deployments. Participate in the development of systems documentation for local development setup guides and deployment guides.',
                       technologies: 'Python - Automation Scripts, PHP - Laravel & Wordpress, Javascript - Angular/Ionic, VueJs, jQuery, Development Tools - Vagrant & VirtualBox, Cloud Services - Cloudways, Cloudflare, DeviServer, Git & Github - Version Control'
                   },
                   {
                       place: 'Dublin Institute of Technology',
                       title: 'Student Tutor',
                       date: 'Sep 2018 - Jan 2019',
                       description: 'Responsibilities include, but not limited to, offering aid in a constructive manner to all students whom attend the Monday session labs with any programming and software related issues. Help with assignments and general course work, discuss differing programming paradigms and architectures and how technology can be leveraged to complete assignments whilst staying on point regarding constraints/requirements.',
                       technologies: ''
                   },
                   {
                       place: 'Starbucks',
                       title: 'Store Manager',
                       date: 'Jan 2015 - Feb 2019',
                       description: 'Responsibilities include, but not limited to, scheduling employees as per store operational requirements, maintaining store standards and staffing by recruiting, orienting and training employees as well as managers for other stores. Ensuring safety standards and best practices are met to maintain the reputation of the brand. Perform analysis of KPI’s and comparisons of weekly, monthly and yearly sales to measure progress and identify new areas for growth. Automate simple office tasks and general paper work.',
                       technologies: ''
                   },
                   {
                       place: 'DroneClip',
                       title: 'Field Operations Engineer',
                       date: '2017 - 2018',
                       description: 'Contracted on a project to project basis. Responsible for the route planning, GPS waypoint selection and drone set up and maintenance in the field. Projects include The Clara Bog image mapping of sections for comparative analysis of degradation over time.',
                       technologies: ''
                   },
               ],
               historyToShow: 1
           }
        }
    }
</script>

<style scoped>

</style>
