const bcrypt = require('bcryptjs');
//companny Models
const User = require('../Models/User');
const Education = require('../Models/Education');
const Job = require('../Models/Job');
const Family = require('../Models/Family');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');

//User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        mobile: {
            type: GraphQLString
        },
        address: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        DOB: {
            type: GraphQLString
        },
        Height: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLString
        },
        bloodGroup: {
            type: GraphQLString
        },
        mosad: {
            type: GraphQLString
        },
        fathername: {
            type: GraphQLString
        },
        fatherOccupation: {
            type: GraphQLString
        },
        fatherMosad: {
            type: GraphQLString
        },
        fatherMonthlySalary: {
            type: GraphQLString
        },
        mothername: {
            type: GraphQLString
        },
        motherOccupation: {
            type: GraphQLString
        },
        motherMosad: {
            type: GraphQLString
        },
        motherMonthlySalary: {
            type: GraphQLString
        },
        physicalDisability: {
            type: GraphQLString
        },
        physicalDisabilityDescription: {
            type: GraphQLString
        },
        meritalStatus: {
            type: GraphQLString
        },
        religion: {
            type: GraphQLString
        },
        caste: {
            type: GraphQLString
        },
        Education: {
            type: new GraphQLList(EducationType),
            resolve(parent, args) {
                return Education.find({ UserId: parent.id });
            }
        },
        Job: {
            type: new GraphQLList(JobType),
            resolve(parent, args) {
                return Job.find({ UserId: parent.id });
            }
        },
        family: {
            type: new GraphQLList(FamilyType),
            resolve(parent, args) {
                return Family.find({ UserId: parent.id });
            }
        }
    })
});

//Education Type
const EducationType = new GraphQLObjectType({
    name: 'Educations',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        degree: {
            type: GraphQLString
        },
        institute: {
            type: GraphQLString
        },
        PassingYear: {
            type: GraphQLString
        },
        Percentage: {
            type: GraphQLString
        }
    })
});

//Job Type
const JobType = new GraphQLObjectType({
    name: 'Jobs',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        jobType: {
            type: GraphQLString
        },
        jobTitle: {
            type: GraphQLString
        },
        jobLocation: {
            type: GraphQLString
        },
        jobDescription: {
            type: GraphQLString
        },
        MonthlySalary: {
            type: GraphQLString
        }
    })
});

//Family Type
const FamilyType = new GraphQLObjectType({
    name: 'Family',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        relation: {
            type: GraphQLString
        },
        occupation: {
            type: GraphQLString
        },
        maritalStatus: {
            type: GraphQLString
        },
        MonthlySalary: {
            type: GraphQLString
        }
    })
});


const query = new GraphQLObjectType({
    name: 'RootQueries',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return User.find({});
            }
        },
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID,
                }
            },
            resolve(parentValue, args) {
                return User.findById(args.id);
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                },
                password: {
                    type: GraphQLString
                },
                mobile: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                let user = new User({
                    name: args.name,
                    email: args.email,
                    password: bcrypt.hashSync(args.password, 10),
                    mobile: args.mobile
                });
                return user.save();
            }
        },
        addEducation: {
            type: EducationType,
            args: {
                UserId: {
                    type: GraphQLID
                },
                degree: {
                    type: GraphQLString
                },
                institute: {
                    type: GraphQLString
                },
                PassingYear: {
                    type: GraphQLString
                },
                Percentage: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                let education = new Education({
                    UserId: args.UserId,
                    degree: args.degree,
                    institute: args.institute,
                    PassingYear: args.PassingYear,
                    Percentage: args.Percentage
                });
                return education.save();
            }
        },
        addJob: {
            type: JobType,
            args: {
                UserId: {
                    type: GraphQLID
                },
                jobType: {
                    type: GraphQLString
                },
                jobTitle: {
                    type: GraphQLString
                },
                jobLocation: {
                    type: GraphQLString
                },
                jobDescription: {
                    type: GraphQLString
                },
                MonthlySalary: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                let job = new Job({
                    UserId: args.UserId,
                    jobType: args.jobType,
                    jobTitle: args.jobTitle,
                    jobLocation: args.jobLocation,
                    jobDescription: args.jobDescription,
                    MonthlySalary: args.MonthlySalary
                });
                return job.save();
            }
        },
        addFamily: {
            type: FamilyType,
            args: {
                UserId: {
                    type: GraphQLID
                },
                name: {
                    type: GraphQLString
                },
                relation: {
                    type: GraphQLString
                },
                occupation: {
                    type: GraphQLString
                },
                maritalStatus: {
                    type: GraphQLString
                },
                MonthlySalary: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                let family = new Family({
                    UserId: args.UserId,
                    name: args.name,
                    relation: args.relation,
                    occupation: args.occupation,
                    maritalStatus: args.maritalStatus,
                    MonthlySalary: args.MonthlySalary
                });
                return family.save();
            }
        },

        //Update Queries
        updateUser: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                },
                name: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                },
                password: {
                    type: GraphQLString
                },
                mobile: {
                    type: GraphQLString
                },
                address: {
                    type: GraphQLString
                },
                city: {
                    type: GraphQLString
                },
                state: {
                    type: GraphQLString
                },
                DOB: {
                    type: GraphQLString
                },
                Height: {
                    type: GraphQLString
                },
                weight: {
                    type: GraphQLString
                },
                bloodGroup: {
                    type: GraphQLString
                },
                mosad: {
                    type: GraphQLString
                },
                fathername: {
                    type: GraphQLString
                },
                fatherOccupation: {
                    type: GraphQLString
                },
                fatherMosad: {
                    type: GraphQLString
                },
                fatherMonthlySalary: {
                    type: GraphQLString
                },
                mothername: {
                    type: GraphQLString
                },
                motherOccupation: {
                    type: GraphQLString
                },
                motherMosad: {
                    type: GraphQLString
                },
                motherMonthlySalary: {
                    type: GraphQLString
                },
                physicalDisability: {
                    type: GraphQLString
                },
                physicalDisabilityDescription: {
                    type: GraphQLString
                },
                meritalStatus: {
                    type: GraphQLString
                },
                religion: {
                    type: GraphQLString
                },
                caste: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return User.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        email: args.email,
                        mobile: args.mobile,
                        address: args.address,
                        city: args.city,
                        state: args.state,
                        DOB: args.DOB,
                        Height: args.Height,
                        weight: args.weight,
                        bloodGroup: args.bloodGroup,
                        mosad: args.mosad,
                        fathername: args.fathername,
                        fatherOccupation: args.fatherOccupation,
                        fatherMosad: args.fatherMosad,
                        fatherMonthlySalary: args.fatherMonthlySalary,
                        mothername: args.mothername,
                        motherOccupation: args.motherOccupation,
                        motherMosad: args.motherMosad,
                        motherMonthlySalary: args.motherMonthlySalary,
                        physicalDisability: args.physicalDisability,
                        physicalDisabilityDescription: args.physicalDisabilityDescription,
                        meritalStatus: args.meritalStatus,
                        religion: args.religion,
                        caste: args.caste
                    }
                }, { new: true });
            }
        },
        updateEducation: {
            type: EducationType,
            args: {
                id: {
                    type: GraphQLID
                },
                degree: {
                    type: GraphQLString
                },
                institute: {
                    type: GraphQLString
                },
                PassingYear: {
                    type: GraphQLString
                },
                Percentage: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return Education.findByIdAndUpdate(args.id, {
                    $set: {
                        degree: args.degree,
                        institute: args.institute,
                        PassingYear: args.PassingYear,
                        Percentage: args.Percentage
                    }
                }, { new: true });
            }
        },
        updateJob: {
            type: JobType,
            args: {
                id: {
                    type: GraphQLID
                },
                jobType: {
                    type: GraphQLString
                },
                jobTitle: {
                    type: GraphQLString
                },
                jobLocation: {
                    type: GraphQLString
                },
                jobDescription: {
                    type: GraphQLString
                },
                MonthlySalary: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return Job.findByIdAndUpdate(args.id, {
                    $set: {
                        jobType: args.jobType,
                        jobTitle: args.jobTitle,
                        jobLocation: args.jobLocation,
                        jobDescription: args.jobDescription,
                        MonthlySalary: args.MonthlySalary
                    }
                }, { new: true });
            }
        },
        updateFamily: {
            type: FamilyType,
            args: {
                id: {
                    type: GraphQLID
                },
                name: {
                    type: GraphQLString
                },
                relation: {
                    type: GraphQLString
                },
                occupation: {
                    type: GraphQLString
                },
                maritalStatus: {
                    type: GraphQLString
                },
                MonthlySalary: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return Family.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        relation: args.relation,
                        occupation: args.occupation,
                        maritalStatus: args.maritalStatus,
                        MonthlySalary: args.MonthlySalary
                    }
                }, { new: true });
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query,
    mutation
});