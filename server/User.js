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
