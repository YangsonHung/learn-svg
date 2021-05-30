export const changeDocumentTitle = () => {
    var title = document.title;

    document.addEventListener(
        'visibilitychange',
        function (event) {
            if (document.hidden) {
                document.title = '快回来~ (ಥ _ ಥ)';
            } else {
                document.title = 'hello~ (*^_^*)';
                setTimeout(function () {
                    document.title = title;
                }, 2000);
            }
        },
        false
    );
};
