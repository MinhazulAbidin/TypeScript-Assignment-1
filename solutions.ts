
const multiplyValue = (valueA: number, valueB?: number): number => {
  if (valueB === undefined) {
    return valueA * 2;
  } else {
    return valueA * valueB;
  }
};


const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};


const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const newArray: T[] = [];
  for (const array of arrays) {
    newArray.push(...array);
  }
  return newArray;
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.students >= minStudents && course.isPublished) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const newArray: T[K][] = [];
  for (const item of items) {
    newArray.push(item[key]);
  }
  return newArray;
};


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
