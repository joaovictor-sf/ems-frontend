import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/employee';

//*Ultilizando uma classe
/*class EmployeeService {
    getEmployees() {
        return axios.get(REST_API_BASE_URL);
    }
}

export default new EmployeeService();*/

//*Ultilizando uma função
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//*Classe ou export const, qual é o melhor para essa situação?

//Aqui, a classe é mais apropriada, pois estamos criando um serviço para manipular os dados do funcionário.
//Se você tiver uma função simples que não requer um objeto, você pode exportar a função diretamente.
//Por exemplo, se você tiver uma função que adicione dois números, você pode exportar a função diretamente.
//Se você tiver uma função que manipula um objeto, é melhor exportar a classe.
//Se você tiver várias funções que manipulam um objeto, é melhor exportar um objeto com várias funções.