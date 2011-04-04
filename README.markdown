## jquery-table-me

# Usage
Just add the classes "paged" and "sortable" to your html table (table must have an id). Example:

	<link rel="StyleSheet" href="css/tablesorter.css" type="text/css" />
	<link rel="StyleSheet" href="css/pagination.css" type="text/css" />

	<script type="text/javascript" src="js/jquery-1.3.2.js"></script>
	<script type="text/javascript" src="js/jquery.pagination.js"></script>
	<script type="text/javascript" src="js/jquery.tablesorter.min.js"></script>
	<script type="text/javascript" src="js/jquery-table-me.js"></script>

	<html>
	<table id="people" class="paged sortable">
		<thead>
			<tr>
				<th>id</th>
				<th>Name</th>
				<th>Birthday year</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>1</td><td>Nelson Ownby</td><td>1989</td></tr>
			<tr><td>2</td><td>Javier Stifter</td><td>1979</td></tr>
			<tr><td>3</td><td>Tyrone Shiflet</td><td>1989</td></tr>
			<tr><td>4</td><td>Lorrie Flohr</td><td>1988</td></tr>
			<tr><td>5</td><td>Odessa Sprung</td><td>1988</td></tr>
			<tr><td>6</td><td>Margery Demyan</td><td>1980</td></tr>
		</tbody>
		</table>
	</html>
