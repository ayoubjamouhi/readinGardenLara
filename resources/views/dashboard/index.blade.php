<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ReadinGarden - DashBoard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</head>
<body>
    <div id="root"></div>
    <script src="{{ asset('js/indexDash.js') }}"></script>
</body>
</html>

