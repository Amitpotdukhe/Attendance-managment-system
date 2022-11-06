{
    Name: String;
    Email: String;
    Password: String;
    Roll: Number;
    Prn: Number;
    semister: [
        {
            id: Number,
            totalAttendance: Number,
            subject: [
                {
                    ref: Faculty,
                    id: String,
                    name: String,
                    total: Number,
                    dates: {
                        date: Date,
                        isPresent: Boolean,
                    },
                },
            ],
        },
        {
            totalAttendance: Number,
            subject: [
                {
                    ref: Faculty,
                    id: String,
                    total: Number,
                    dates: {
                        date: Date,
                        isPresent: Boolean,
                    },
                },
            ],
        },
    ];
}

// sample data
{
    name: "Amit";
    email: "amit@gmail.com";
    password: "12345";
    rollno: 123;
    prn: "435436546";
    semister: [
        {
            semister: 1,
            totalAttendance: 54,
            subject: [
                {
                    subjectId: "BTCOE",
                    subjectName: "CC",
                    total: 90,
                    dates: {
                        date: 12 / 1 / 2022,
                        isPresent: True,
                    },
                },
            ],
        },
    ];
}
