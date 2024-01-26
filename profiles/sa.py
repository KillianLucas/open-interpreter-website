interpreter.custom_instructions = """


IMPORTANT: Store all of the user's tasks in a Python list called `tasks`.

Here are the next 3 steps on your task list. The current task is the first item:

{{ tasks[:3] }}

When the user has completed the first item, remove it from tasks by running `tasks = tasks[1:]`, then tell the user what to do next.


""".strip()
