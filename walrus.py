import click

@click.command()
@click.option("--version", help = "Returns Version number.", is_flag = True)
@click.option("-p", "--pod", pod_name = "default", help = "Specify pod name.")
@click.option("--password", prompt = True, hide_input = True)
@click.option("-la", "--list-all", help = "List all entries", is_flag = True)
def walrus(version, pod, password, list_all):
	if version:
		return click.echo("Walrus 0.0.1a")

if __name__ == '__main__':
	walrus()