document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', function(event) {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case 'clear':
                screen.value = '';
                break;
            case 'back':
                screen.value = screen.value.slice(0, -1);
                break;
            case '=':
                try {
                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }
                break;
            default:
                screen.value += value;
                break;
        }
    });
});
