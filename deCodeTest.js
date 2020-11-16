const numbers = document.getElementById('numbers')
const revString = document.getElementById('revstring')
const jobFeed = document.getElementById('jobfeed')
//1.  Print numbers 1 to 100, 3 = 'Direct', 5  = 'Employers', mult 3 and 5 = 'Direct Employers'

function print1To100() {
    for (let i = 1; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            numbers.innerHTML += 'DirectEmployers, '
        }
        else if(i % 3 === 0){
            numbers.innerHTML += 'Direct, '
        }
        else if(i % 5 === 0){
            numbers.innerHTML += 'Employers, '
        }
        else {
            numbers.innerHTML += `${i}, `
        }
    }
}
print1To100()


// 2. Take a string and reverse its order
function reverseString(str) {
    let arrStr = str.split('')
    let revArr = arrStr.reverse()
    let revStr = revArr.join('')
    revString.innerHTML= revStr
}
reverseString('this is a reverse string')



//3. Fetchjob data at 
const feedURL = 'https://indiana.dejobs.org/jobs/feed/json?num_items=10'

async function fetchJobs(){
    const res = await fetch(feedURL)
    const jobData = await res.json()
    console.log(jobData)

    jobData.forEach(job =>{
        console.log(job)
        let jobLink = document.createElement('a')
        jobLink.className = 'jobs'
        jobLink.href = `${job.url}`
        jobLink.innerHTML = `${job.title} <br /> ${job.company} - ${job.location}`
        jobFeed.appendChild(jobLink)
    })
}
fetchJobs()
