import { JSX } from "react";


type EducationDataProps = {
  schoolName: string,
  profile: string,
  description: string,
  startedAt: string,
  finishedAt?: string,
}

const data: EducationDataProps[] = [
  {
    schoolName: "Wrocław University of Science and Technology",
    profile: "Cybersecurity",
    description: "Started in 2023, I'm learning there how networks work, how to create and secure them. Moreover I'm taught scripting in Bash, Powershell and Python",
    startedAt: new Date(2023, 1, 1).getUTCFullYear().toString(),
    finishedAt: undefined,
  },
  {
    schoolName: "Electrical Technical School in Białystok",
    profile: "Programmer technician",
    description: "Started in 2019 and finished in 2023, there I have discovered SQL and NoSQL basics, web development as well as native desktop apps",
    startedAt: new Date(2019, 1, 1).getUTCFullYear().toString(),
    finishedAt: new Date(2023, 1, 1).getUTCFullYear().toString(),
  },
]

export default function EducationList(): JSX.Element {
  return <div className="my-10">
    <div className="text-4xl mb-2">Education</div>
    <div className="w-full flex flex-col gap-5">
      {data.map(educationData => <EducationItem key={educationData.schoolName} {...educationData} />)}
    </div>
  </div>
}

function EducationItem(props: EducationDataProps): JSX.Element {
  return <div className="border-3 border-aquamarine-700 p-5 rounded-lg flex flex-col">
    <div className="text-2xl text-aquamarine-500">{props.schoolName}</div>
    <div>{props.profile}</div>
    <div className="py-3">{props.description}</div>
    <div>{props.startedAt} - {props.finishedAt ?? 'now'}</div>
  </div>
}
