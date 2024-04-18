import { Client } from "./interfaces";

const clients: Client[]= [
    {
        name: 'João Pedro',
        address: 'Rua do joão'
    },{
        name: 'Lívia',
        address: 'Rua da Lívia'
    },{
        name: 'Fulano',
        address: 'Rua do fulano'
    }
];

export function GET(){
  return(  
    Response.json({clients})
  )
}

export async function POST(request: Request){
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;
    clients.push({
        name, 
        address});
   return( Response.json({
      status: "added"
    }));
}