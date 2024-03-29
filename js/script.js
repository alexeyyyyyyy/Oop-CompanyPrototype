const firm = new Company();

addEmp.onclick = function () {
    const employee = new Employee(
        empId.value.trim(),
        empName.value.trim(),
        empLName.value.trim(),
        empDate.value,
        empSalary.value,
        empPosition.value);

    if (firm.addEmployee(employee)) {
        const li = employee.createEmployeeDomElement('li');
        employeesList.appendChild(li);

        const rmvButton = document.createElement('button1');
        rmvButton.textContent = '<= Remove this employee';
        rmvButton.onclick = function () {
            li.remove();
        }
        li.appendChild(rmvButton);
    } else {
        alert(`Employee with id = ${employee.id} exists`);
    }
    const clearInputs = document.querySelectorAll('input');

    clearInputs.forEach(input => {
        input.value = '';
    })
    const clearInputs1 = document.querySelectorAll('select');

    clearInputs1.forEach(input => {
        input.value = '';
    })
}
calcStats.onclick = function () {
    const container = document.getElementById('stats');
    const h3Element = firm.createCalcStats();
    container.appendChild(h3Element);


}