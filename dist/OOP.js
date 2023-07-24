"use strict";
class employees {
    constructor(name, id, jobTitle) {
        this.name = name;
        this.id = id;
        this.jobTitle = jobTitle;
    }
    getJobTitle() {
        return this.jobTitle;
    }
    setJobTitle(jobTitle) {
        this.jobTitle = jobTitle;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getname() {
        return this.name;
    }
    setname() {
        this.name = this.name;
    }
}
