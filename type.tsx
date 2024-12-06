export interface Task {
    id: string;           
    title: string;       
    creator: string;      
    createdat: Date;    
    status: string;       
    description: string;  
    completed?: boolean;  
  }
  