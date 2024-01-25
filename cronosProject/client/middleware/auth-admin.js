export default async function({$auth, redirect}){
let user = $auth.$state.user 
if (user && user.role == 'admin'){

}
else{
    redirect('/')
}
}