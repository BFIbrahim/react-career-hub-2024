const getStoredApplication = () => {
    const applyedJobs = localStorage.getItem("applied-jobs")
    if(applyedJobs){
        return JSON.parse(applyedJobs)
    }
    return []
}

const saveJobApplication = (id) =>{
    const storedJobApplications = getStoredApplication()
    const exists = storedJobApplications.find(findId => findId === id)
    if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('applied-jobs', JSON.stringify(storedJobApplications))
    }
}

export {saveJobApplication, getStoredApplication}