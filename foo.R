library(shiny)

runApp(list(
  ui = basicPage(
        HTML("<style>\n"),
        includeHTML(file.path("www", "demo.css")),
        HTML("</style>"),
        HTML("<script type='text/javascript'>"),
        includeHTML(file.path("www", "demo.js")),
        HTML("</script>"),
        tags$button("Select All Rows", id="select_all_rows"),
        tags$button("Deselect All Rows", id="deselect_all_rows"),
        tags$button("Send to R", id="send_to_r"),

    h2('The mtcars data'),
    dataTableOutput('mytable')
  ),
  server = function(input, output) {
    output$mytable = renderDataTable({
      mtcars
    })
  }
))
